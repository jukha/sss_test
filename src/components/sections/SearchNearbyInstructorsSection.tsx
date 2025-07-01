'use client';

import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import InstructorProfileCards from '../shapes/InstructorProfileCards';
import InstructorsLocationMap from '../widgets/InstructorsLocationMap';
import { InstructorEntity } from '@/entities/instructor.entity';
import { ZipCodeInput } from '@/components/ZipCodeInput';
import { useEffect, useRef, useState } from 'react';
import { apiClient } from '@/api_client/api.client';
import { convertZipToLatLon } from '@/helpers/convert-zip-to-lat-lon';
import { Coordinates } from '@/types/coordinates';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import UnservicedZipCodeError from '@/components/widgets/UnservicedZipCodeError';
import { withClientErrorBoundary } from '@/hoc/with-client-error-boundary';

const noteForUser = "*If you'd like to work with a specific instructor, we'll do our best match you with your request. However, instructor availability is not guaranteed. If the instructor is unavailable, we'll pair you with a swim instructor who's equally qualified!";

export type SearchNearbyInstructorsSectionProps = {
  defaultZipCode?: string;
  defaultInstructors?: InstructorEntity[];
  defaultInstructorsCoordinatesOnly?: InstructorEntity[];
  defaultShowUnservicedError?: boolean;
  defaultShowServerError?: boolean;
  defaultZipCoordinates?: Coordinates;
}

const SearchNearbyInstructorsSection = (props: SearchNearbyInstructorsSectionProps) => {
  const {
    defaultZipCode = '',
    defaultInstructors = [],
    defaultInstructorsCoordinatesOnly = [],
    defaultShowUnservicedError = false,
    defaultShowServerError = false,
    defaultZipCoordinates = undefined,
  } = props;

  const [zipCode, setZipCode] = useState(defaultZipCode);
  const [loading, setLoading] = useState(false);
  const [showUnservicedError, setShowUnservicedError] = useState(defaultShowUnservicedError);
  const [showServerError, setShowServerError] = useState(defaultShowServerError);

  const [paginatedInstructors, setPaginatedInstructors] = useState<InstructorEntity[]>(defaultInstructors);
  const [instructorsCoordinatesOnly, setInstructorsCoordinatesOnly] = useState<InstructorEntity[]>(defaultInstructorsCoordinatesOnly);

  const searchAndMapContainerRef = useRef<HTMLDivElement | null>(null);
  const instructorsListContainerRef = useRef<HTMLDivElement | null>(null);

  const [zipCoordinates, setZipCoordinates] = useState<Coordinates | undefined>(defaultZipCoordinates);

  const loadInstructorsPaginated = async ({ lat, lng, offset }: Coordinates & {offset: number}) => {
    return (await apiClient.instructors.nearbyLatLng.get({lat, lng, limit: 3, offset})).data;
  }

  const loadInstructorsCoordinates = async ({ lat, lng }: Coordinates) => {
    return (await apiClient.instructors.nearbyLatLng.get({lat, lng, coordinatesOnly: true})).data;
  }

  const checkHasInstructorsOrShowError = (zipCode: string, instructors: InstructorEntity[]) => {
    if (instructors.length === 0) {
      setShowUnservicedError(true);
      apiClient.unservicedZipCodes.create({zipCode});
    }
  }

  const handleZipCodeChange = async (newZipCode: string) => {
    setShowServerError(false);
    setZipCode(newZipCode);

    if (!newZipCode) {
      setPaginatedInstructors([]);
      setZipCoordinates(undefined);
      return;
    }

    setShowUnservicedError(false);
    setLoading(true);

    try {
      const { lng: lngUnk, lat: latUnk } = await convertZipToLatLon(newZipCode);
      const coordinates = { lat: Number(latUnk), lng: Number(lngUnk) };

      setZipCoordinates(coordinates);

      const [instructors, instructorsCoordinates] = await Promise.all([
        loadInstructorsPaginated({ ...coordinates, offset: newZipCode === zipCode ? paginatedInstructors.length : 0 }),
        loadInstructorsCoordinates(coordinates)
      ]);

      setPaginatedInstructors(instructors);
      setInstructorsCoordinatesOnly(instructorsCoordinates);
      checkHasInstructorsOrShowError(newZipCode, instructorsCoordinates);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (defaultZipCode && searchAndMapContainerRef.current) {
      searchAndMapContainerRef.current.scrollIntoView();
    }
  }, [defaultZipCode]);

  useInfiniteScroll({
    containerRef: instructorsListContainerRef,
    onLoadMore: async () => {
      if (!zipCoordinates) return;
      if (paginatedInstructors.length >= instructorsCoordinatesOnly.length) return;
      const r = await loadInstructorsPaginated({
        ...zipCoordinates, offset: paginatedInstructors.length
      });
      setPaginatedInstructors((v) => [...v, ...r]);
    }
  }, [zipCoordinates, paginatedInstructors.length, instructorsCoordinatesOnly.length])

  return (
    <Container className='py-[30px]'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='flex-5'>
          <div className='border-b-[1] border-midGray pb-12' ref={searchAndMapContainerRef}>
            <Typography
              variant='h4'
              className='font-bold font-primary text-offBlack leading-[120%] mb-4'
            >
              Search Nearby Instructors
            </Typography>

            <ZipCodeInput outlineColor='var(--color-lightBlue)' defaultValue={defaultZipCode} onSubmit={handleZipCodeChange}/>

            {showUnservicedError &&
              <div className="sm:w-[500px] mt-[20px]">
                <UnservicedZipCodeError zipCode={zipCode}/>
              </div>
            }

            {showServerError &&
              <p className="text-xl text-red">Server error has occurred. Please, try again</p>
            }

            {loading &&
              <Typography variant='h4'>Loading instructors...</Typography>
            }

            <Typography
              variant='custom'
              className='font-secondary font-medium leading-[120%] text-offBlack text-sm mt-4 max-w-[507px]'
            >
              {noteForUser}
            </Typography>
          </div>

          <div className='custom-scrollbar pr-[34px] max-h-[70vh] overflow-y-auto pt-6' ref={instructorsListContainerRef}>
            {!loading && paginatedInstructors.map((profile: InstructorEntity) => (
              <InstructorProfileCards key={profile.id.toString()} profile={profile} />
            ))}
          </div>
        </div>

        <div className='w-full h-[50vh] lg:h-[calc(100vh_-_var(--navbar-height)_-_40px)] lg:flex-3 lg:sticky lg:top-[calc(var(--navbar-height)_+_20px)]'>
          <InstructorsLocationMap instructorProfiles={instructorsCoordinatesOnly} center={zipCoordinates} />
        </div>
      </div>
    </Container>
  );
};

export default withClientErrorBoundary(SearchNearbyInstructorsSection);
