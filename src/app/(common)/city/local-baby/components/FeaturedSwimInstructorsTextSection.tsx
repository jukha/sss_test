'use client';

import { useCityPageContext } from '@/app/(common)/city/context';
import { FeaturedSwimInstructorsText } from '@/app/(common)/city/common/FeaturedSwimInstructorsText';

export const FeaturedSwimInstructorsTextSection = () => {
  const { cityName, metroArea } = useCityPageContext();

  return (
    <FeaturedSwimInstructorsText
      title={`Featured baby swim instructors in ${cityName}, ${metroArea.stateAbbreviation}`}
      description={`We believe our students deserve the best, so we work with only the best swim instructors in ${cityName}. Every Sunsational swim teacher has a minimum of 2 years teaching experience, is CPR/First Aid certified, passes a national background check, and has a proven track record of successful teaching before they even land an interview with Sunsational.\n\nWe back their expertise with a 100% satisfaction guarantee. Why? Because we know great instructors mean fast results!`}
    />
  )
}
