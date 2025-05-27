import {
  BabyBottleIcon,
  BabyIcon,
  BeachUmbrellaIcon,
  BurglaryIcon,
  FemaleUserIcon,
  FishFoodIcon,
  MuscleIcon,
  NewsIcon,
  PoolIcon,
  PoolsideBarIcon,
  SnorkelIcon,
  StandingManIcon,
  StarBlogIcon,
  StreetViewIcon,
  TrackAndFieldIcon,
  WaterIcon,
} from '@/components/icons';
import OutDoorSwimmingPoolIcon from '@/components/icons/OutDoorSwimmingPoolIcon';
import SunIcon from '@/components/icons/SunIcon';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import ChipWithIcon from '@/components/shapes/ChipWithIcon';
import React from 'react';

const data = {
  heading: 'Popular Topics & Categories',
  categories: [
    {
      label: 'Adult Swim Lessons',
      Icon: <StandingManIcon />,
      colorClass: 'bg-darkBlue',
    },
    {
      label: 'Child Swim Lessons',
      Icon: <StreetViewIcon />,
      colorClass: 'bg-blue',
    },
    {
      label: 'Toddler Swim Lessons',
      Icon: <BabyIcon />,
      colorClass: 'bg-lightBlue',
    },
    {
      label: 'Baby Swim Lessons',
      Icon: <BabyBottleIcon />,
      colorClass: 'bg-teal',
    },
    {
      label: 'General',
      Icon: <NewsIcon />,
      colorClass: 'bg-red',
    },
    {
      label: 'Local Swim Schools',
      Icon: <OutDoorSwimmingPoolIcon />,
      colorClass: 'bg-orange',
    },
    {
      label: 'Swim Lesson Tips',
      Icon: <BurglaryIcon />,
      colorClass: 'bg-yellow',
    },
    {
      label: 'Pool Parties & Fun',
      Icon: <PoolsideBarIcon />,
      colorClass: 'bg-darkBlue',
    },
    {
      label: 'Pool Maintenance',
      Icon: <PoolIcon />,
      colorClass: 'bg-blue',
    },
    {
      label: 'Swim Stroke Technique',
      Icon: <FishFoodIcon />,
      colorClass: 'bg-teal',
    },
    {
      label: 'Water Safety',
      Icon: <WaterIcon />,
      colorClass: 'bg-lightBlue',
    },
    {
      label: 'Swim Instructor Highlight',
      Icon: <FemaleUserIcon color='white' />,
      colorClass: 'bg-red',
    },
    {
      label: 'Swimming Gear',
      Icon: <SnorkelIcon />,
      colorClass: 'bg-orange',
    },
    {
      label: 'Travel',
      Icon: <SunIcon />,
      colorClass: 'bg-yellow',
    },
    {
      label: 'Holidays',
      Icon: <BeachUmbrellaIcon />,
      colorClass: 'bg-blue',
    },
    {
      label: 'Fitness',
      Icon: <MuscleIcon />,
      colorClass: 'bg-teal',
    },
    {
      label: 'Triathalon',
      Icon: <TrackAndFieldIcon />,
      colorClass: 'bg-darkBlue',
    },
    {
      label: 'Special Needs Swim',
      Icon: <StarBlogIcon />,
      colorClass: 'bg-lightBlue',
    },
  ],
};

const PopularTopicsSection = () => {
  return (
    <Container className='flex flex-col justify-start items-center gap-16 py-12'>
      <Typography
        variant='custom'
        className='text-[40px] md:text-[48px] font-primary font-bold text-center leading-[110%] text-offBlack'
      >
        {data.heading}
      </Typography>
      <div className='flex justify-center items-center flex-wrap max-w-[1333px] gap-4'>
        {data.categories.map((el, index) => {
          return <ChipWithIcon key={index} content={el} />;
        })}
      </div>
    </Container>
  );
};

export default PopularTopicsSection;
