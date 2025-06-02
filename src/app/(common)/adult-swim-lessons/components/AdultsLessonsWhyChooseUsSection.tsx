import { adultsSwimLessonWhyUs } from '@/assets';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import { SectionInfoCardType } from '@/types/section-info-card.type';
import Image from 'next/image';
import React from 'react';

const content = {
  title: 'Why choose Sunsational Swim School to learn to swim?',
};

const sectionInfoCardData: SectionInfoCardType = {
  wrapperClasses: 'gap-5 pl-8 pr-12 py-[50px] lg:py-[64px] lg:px-[79px] bg-yellow',
  listItemBulletIconAlignment: 'center',
  useListIdxAsIcon: true,
  listItems: [
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Quick Results',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Our adult swim students generally learn to swim within just 6 to 12 swim lessons',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Built-in Convenience',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Sunsational swim instructors travel to you & work around your schedule',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Top Instructors',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription:
        'All Sunsational instructors are CPR/First Aid certified with a minimum of 2 years of experience teaching adult lessons',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription: 'Satisfaction Guaranteed',
    },
    {
      itemBulletBg: 'var(--color-red)',
      itemDescription:
        "If you don't love your lessons, you can choose a new instructor or get a refund for unused lesson times.",
    },
  ],
};

const AdultsLessonsWhyChooseUsSection = () => {
  return (
    <div className='py-[150px]'>
      <Typography variant='h2' className='max-w-[940px] mx-auto text-center'>
        {content.title}
      </Typography>
      <FlexWrapper className='justify-center'>
        <div>
          <Image src={adultsSwimLessonWhyUs} alt='' />
        </div>
        <div className='max-w-[494px]'>
          <SectionInfoCard {...sectionInfoCardData} />
        </div>
      </FlexWrapper>
    </div>
  );
};

export default AdultsLessonsWhyChooseUsSection;
