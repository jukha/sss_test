import ServiceLocationsSection from '@/components/sections/ServiceLocationsSection';
import { ServiceLocations } from '@/enum/service-locations.enum';
import React from 'react';

const data = {
  content: {
    title: 'Swimming lesson for a teenager near me',
    desc: 'Private swim lessons offer more than just swimming skills—they build confidence, self-esteem, and a strong work ethic. Teens especially benefit from learning new skills or refining existing ones, gaining life lessons that carry over into other areas. \n\nWith Sunsational’s private swim instructors, teens can improve their swimming at home or in a nearby community pool—no matter their current skill level.',
  },
  locationsToShow: [
    ServiceLocations.Washington,
    ServiceLocations.California,
    ServiceLocations.Nevada,
    ServiceLocations.Colorado,
    ServiceLocations.Texas,
    ServiceLocations.Missouri,
    ServiceLocations.Massachusetts,
    ServiceLocations.Virginia,
    ServiceLocations.Florida,
    ServiceLocations.WashingtonDC,
  ],
};

const TeenLessonsLocation = () => {
  return <ServiceLocationsSection {...data} />;
};

export default TeenLessonsLocation;
