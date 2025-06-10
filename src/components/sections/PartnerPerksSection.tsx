import React from 'react';
import Typography from '../semantics/Typography';
import {
  CalendarIcon,
  CrowdIcon,
  DollarBagIcon,
  HomeIcon,
  MedalFirstPlaceIcon,
  PurchaseOrderIcon,
} from '../icons';
import Container from '../layout/Container';
import PerkCard from '../shapes/PerkCard';


type Props = {
  descriptionTop?: string;
  descriptionBottom?: string;
};

const perks = [
  {
    icon: <DollarBagIcon />,
    iconFrameColor: 'var(--color-darkBlue)',
    description:
      'Earn extra income - From $38-$60/hr depending on the location & lesson type',
    descriptionClasses: 'max-w-[360px]',
  },
  {
    icon: <CrowdIcon />,
    iconFrameColor: 'var(--color-darkBlue)',
    description: 'Teach local swimmers in your community',
    descriptionClasses: 'max-w-[320px]',
  },
  {
    icon: <HomeIcon />,
    iconFrameColor: 'var(--color-blue)',
    description:
      'Travel to local students’ homes or community pools for lessons',
    descriptionClasses: 'max-w-[344px]',
  },
  {
    icon: <PurchaseOrderIcon />,
    iconFrameColor: 'var(--color-blue)',
    description:
      'Select your own clients that align with your skills, location & schedule',
    descriptionClasses: 'max-w-[320px]',
  },
  {
    icon: <CalendarIcon />,
    iconFrameColor: 'var(--color-teal)',
    description:
      "Total flexibility, select the lessons & schedule you're available to teach",
    descriptionClasses: 'max-w-[344px]',
  },
  {
    icon: <MedalFirstPlaceIcon />,
    iconFrameColor: 'var(--color-teal)',
    description:
      'Join a trusted swim program that partners with top swim instructors',
    descriptionClasses: 'max-w-[320px]',
  },
];

// Split into columns: even index left, odd index right
const leftColumn = perks.filter((_, i) => i % 2 === 0);
const rightColumn = perks.filter((_, i) => i % 2 !== 0);

const PartnerPerksSection: React.FC<Props> = ({
  descriptionTop = 'Sunsational Swim School is the #1 provider of private swimming lessons in America. We are currently seeking top swim instructors for Spring/Summer 2025 and beyond! By joining our team, you’ll enjoy:',
  descriptionBottom = 'Share your passion for swimming with students in the [city] area and find rewarding aquatic jobs this season. We can’t wait for you to join the Sunsational team.',
}) => {
  return (
    <Container>
      <Typography variant='h2' className='max-w-[837px] mx-auto mb-5'>
        Partner with Sunsational as a Swim Instructor for Spring/Summer 2025
      </Typography>
      <Typography
        variant='custom'
        className='text-[18px] text-off-black md:text-black md:text-[20px] font-medium leading-[120%] font-secondary mx-auto max-w-[735px] whitespace-break-spaces text-center'
      >
        {descriptionTop}
      </Typography>
      {/* Perks Start */}
      <ul className='grid gap-5 desktop:gap-[80px] justify-center lg:grid-cols-[480px_480px] my-[46px] lg:my-[90px]'>
        <div className='flex flex-col gap-5 max-desktop:pl-[52px]'>
          {leftColumn.map((perk, i) => (
            <PerkCard
              key={i}
              description={perk.description}
              descriptionClasses={perk.descriptionClasses}
              icon={perk.icon}
              iconFrameColor={perk.iconFrameColor}
            />
          ))}
        </div>
        <div className='flex flex-col gap-5 max-desktop:pl-[52px]'>
          {rightColumn.map((perk, i) => (
            <PerkCard
              key={i}
              description={perk.description}
              descriptionClasses={perk.descriptionClasses}
              icon={perk.icon}
              iconFrameColor={perk.iconFrameColor}
            />
          ))}
        </div>
      </ul>
      <Typography
        variant='body1'
        className='font-secondary font-bold leading-[125%] max-w-[638px] text-center mx-auto'
      >
        {descriptionBottom}
      </Typography>
    </Container>
  );
};

export default PartnerPerksSection;
