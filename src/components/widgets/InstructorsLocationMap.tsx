'use client';
import { InstructorEntity } from '@/entities/instructor.entity'; // Use InstructorEntity
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };

type Props = {
  instructorProfiles: InstructorEntity[]; // Use InstructorEntity[]
}

const InstructorsLocationMap = ({ instructorProfiles }: Props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: 'weekly',
    libraries: ['maps', 'marker'],
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading...</p>;

  // Handle case where instructorProfiles might be empty or undefined during initial load or if no instructors
  if (!instructorProfiles || instructorProfiles.length === 0) {
    // Temporary UI, display a message or a default map view 
    return <p>No instructor locations to display.</p>; 
  }

  // Determine a center point. Could be the first instructor or a calculated average.
  const firstProfileWithCoords = instructorProfiles.find(p => p.lat != null && p.lng != null);
  const center = {
    lat: firstProfileWithCoords?.lat ?? 0, // Use lat from InstructorEntity
    lng: firstProfileWithCoords?.lng ?? 0, // Use lng from InstructorEntity
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
      {instructorProfiles.map((inst) => (
        inst.lat != null && inst.lng != null && ( // Check lat and lng from InstructorEntity
          <Marker
            key={inst.id.toString()} // Ensure key is string
            position={{ lat: inst.lat, lng: inst.lng }} // Use lat and lng
            title={`${inst.first_name || ''} ${inst.last_name || ''}`.trim()} // Construct name
          />
        )
      ))}
    </GoogleMap>
  );
};

export default InstructorsLocationMap;
