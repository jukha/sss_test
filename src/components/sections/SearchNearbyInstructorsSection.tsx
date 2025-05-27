'use client';

import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import CustomInputForm from '../shapes/CustomInputForm';
import InstructorProfileCards from '../shapes/InstructorProfileCards';
import InstructorsLocationMap from '../widgets/InstructorsLocationMap';
import { useInstructors } from '@/context/instructors.context';
import { InstructorEntity } from '@/entities/instructor.entity'; 

const noteForUser = "*If you'd like to work with a specific instructor, we'll do our best match you with your request. However, instructor availability is not guaranteed. If the instructor is unavailable, we'll pair you with a swim instructor who's equally qualified!";


const SearchNearbyInstructorsSection = () => {
  const { instructors, loading, error } = useInstructors();

  if (loading) {
    // Temporary UI for loading state
    return (
      <Container className='py-[30px]'>
        <Typography variant='h4'>Loading instructors...</Typography>
      </Container>
    );
  }

  if (error) {
    // Temporary UI for error state
    return (
      <Container className='py-[30px]'>
        <Typography variant='h4' className='text-red-500'>
          Error loading instructors: {error.message}
        </Typography>
      </Container>
    );
  }

  if (!instructors || instructors.length === 0) {
    // Temporary UI for no instructors found
    return (
      <Container className='py-[30px]'>
        <Typography variant='h4'>No instructors found.</Typography>
      </Container>
    );
  }

  return (
    <Container className='py-[30px]'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='flex-5'>
          {/** Zip Code Search Block*/}
          <div className='border-b-[1] border-midGray pb-12'>
            <Typography
              variant='h4'
              className='font-bold font-primary text-offBlack leading-[120%] mb-4'
            >
              Search Nearby Instructors
            </Typography>
            <CustomInputForm
              outlineColor='var(--color-lightBlue)'
              placeholder='Your Zip Code'
              submitText='Search'
            />
            <Typography
              variant='custom'
              className='font-secondary font-medium leading-[120%] text-offBlack text-sm mt-4 max-w-[507px]'
            >
              {noteForUser}
            </Typography>
          </div>
          {/* Instructor profile Cards*/}
          <div className='custom-scrollbar lg:pr-[34px] lg:max-h-[70vh] lg:overflow-y-auto pt-6'>
            {instructors.map((profile: InstructorEntity) => ( // Iterate over instructors directly
              <InstructorProfileCards key={profile.id.toString()} profile={profile} />
            ))}
          </div>
        </div>

        {/* Map Container */}
        <div className='w-full h-[50vh] lg:h-[calc(100vh_-_var(--navbar-height)_-_40px)] lg:flex-3 lg:sticky lg:top-[calc(var(--navbar-height)_+_20px)]'>
          <InstructorsLocationMap instructorProfiles={instructors} /> {/* Pass instructors directly */}
        </div>
      </div>
    </Container>
  );
};

export default SearchNearbyInstructorsSection;
