'use client';

import { useCityPageContext } from '@/app/(common)/city/context';
import { FeaturedSwimInstructorsText } from '@/app/(common)/city/common/FeaturedSwimInstructorsText';

export const FeaturedSwimInstructorsTextSection = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <FeaturedSwimInstructorsText
      title={`Featured swim instructors in ${cityName}, ${metroArea.stateAbbreviation}`}
      description={`Our water safety instructors love what they do – and it shows! Hear firsthand about what teaching for Sunsational Swim School is all about.`}
    />
  )
}
