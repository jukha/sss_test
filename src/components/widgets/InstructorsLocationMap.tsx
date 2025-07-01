'use client';
import { InstructorEntity } from '@/entities/instructor.entity'; // Use InstructorEntity
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { Coordinates } from '@/types/coordinates';

const containerStyle = { width: '100%', height: '100%' };


type Props = {
  instructorProfiles: InstructorEntity[];
  center?: Coordinates;
}

const defaultCenter = {
  lat: 38.70991683333334,
  lng: -101.36191699999999,
}

const isDefaultCenter = (center: Coordinates) => center.lat === defaultCenter.lat && center.lng === defaultCenter.lng;

const InstructorsLocationMap = ({ instructorProfiles, center = defaultCenter }: Props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: 'weekly',
    libraries: ['maps', 'marker'],
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading...</p>;

  const zoom = isDefaultCenter(center) ? 4 : 8;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
      {instructorProfiles.map((inst) => (
        inst.lat != null && inst.lng != null && (
          <Marker
            key={inst.id.toString()}
            position={{ lat: inst.lat, lng: inst.lng }}
            title={inst.name || ''}
          />
        )
      ))}
    </GoogleMap>
  );
};

export default InstructorsLocationMap;
