import { useEffect, useState } from 'react';

import LessonPackageCard from './LessonPackageCard';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';

const LESSON_PACKAGE_COLORS = [
  {
    bg: '#FFF9E1',
    badgeBg: '#f86008',
  },
  {
    bg: '#FFF5EF',
    badgeBg: '#d60009',
  },
  {
    bg: '#EEFCFF',
    badgeBg: '#033d9a',
  },
];

type Props = {
  lessonMinutes: number;
  packages: LessonPackageEntity[];
  selectedPackageIndex?: number;
  onChange?: (selectedPackageIndex?: number) => void;
};

const LessonPackageSelector: React.FC<Props> = ({
  lessonMinutes,
  packages,
  selectedPackageIndex,
  onChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  const handleChange = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    setSelectedIndex(selectedPackageIndex);
  }, [selectedPackageIndex]);

  useEffect(() => {
    onChange?.(selectedIndex);
  }, [selectedIndex]);

  return (
    <fieldset className='flex flex-col gap-[40px] mt-[12px] desktop:flex-row desktop:gap-[8px]'>
      {packages.map((lessonPackage, idx) => (
          <LessonPackageCard
            key={idx}
            isSelected={idx === selectedIndex}
            bgColor={LESSON_PACKAGE_COLORS[idx].bg}
            mainColor={LESSON_PACKAGE_COLORS[idx].badgeBg}
            badgeText={lessonPackage.badgeText}
            lessonsCount={lessonPackage.lessonsCount}
            description={lessonPackage.description}
            price={lessonPackage.price}
            lessonMinutes={lessonMinutes}
            salePercent={lessonPackage.salePercent}
            learnGuaranteed={Boolean(lessonPackage.learnGuaranteed)}
            otherCardSelected={selectedIndex !== undefined && selectedIndex !== idx}
            index={idx}
            onChange={handleChange}
            nameAttr='lesson_package'
          />
      ))}
    </fieldset>
  );
};

export default LessonPackageSelector;
