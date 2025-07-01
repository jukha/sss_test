import NearbyInstructorsPage from '../components/NearbyInstructorsPage';
import { convertZipToLatLon } from '@/helpers/convert-zip-to-lat-lon';
import getInstructorsNearbyLatLng from '@/repositories/instructors/nearby-lat-lng.instructors';
import { InstructorEntity } from '@/entities/instructor.entity';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import { SearchNearbyInstructorsSectionProps } from '@/components/sections/SearchNearbyInstructorsSection';

type Props = {
  params: Promise<{ 'zip-code': string }>;
};

async function NearbyInstructorsPageWithDefaultZipcode({ params }: Props) {
  let props: SearchNearbyInstructorsSectionProps = {
    defaultInstructors: [],
    defaultInstructorsCoordinatesOnly: [],
    defaultShowUnservicedError: false,
    defaultZipCode: '',
    defaultShowServerError: false,
    defaultZipCoordinates: undefined,
  };

  try {
    const { 'zip-code': zipCode } = await params;

    const { lng: lngUnk, lat: latUnk } = await convertZipToLatLon(zipCode);
    const zipCoordinates = { lat: Number(latUnk), lng: Number(lngUnk) };

    const [instructors, instructorsCoordinates] = await Promise.all([
      getInstructorsNearbyLatLng({ ...zipCoordinates }),
      getInstructorsNearbyLatLng({ ...zipCoordinates, coordinatesOnly: true }),
    ]);

    const showUnservicedError = instructors.length === 0;

    props = {
      defaultInstructors: instructors as InstructorEntity[],
      defaultInstructorsCoordinatesOnly: instructorsCoordinates as InstructorEntity[],
      defaultShowUnservicedError: showUnservicedError,
      defaultZipCode: zipCode,
      defaultZipCoordinates: zipCoordinates,
    }
  } catch (e) {
    props.defaultShowServerError = true;
    console.error(e);
  }

  return (
    <NearbyInstructorsPage {...props} />
  )
}

export default withServerSideErrorBoundary(NearbyInstructorsPageWithDefaultZipcode);
