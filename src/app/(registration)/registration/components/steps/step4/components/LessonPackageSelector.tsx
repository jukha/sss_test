import { useEffect, useState } from 'react';

import LessonPackageCard from './LessonPackageCard';

export type PackageForDisplay = {
  id: number;
  badgeText: string;
  lessonsCount: number;
  description: string;
  price: number;
  salePercent?: number;
  learnGuaranteed?: boolean;
};

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
  packages: PackageForDisplay[];
  selectedPackageId?: number;
  error?: string;
  onChange?: (selectedPackageId?: number) => void;
};

const LessonPackageSelector: React.FC<Props> = ({ lessonMinutes, packages, selectedPackageId, error, onChange }) => {
  const [localSelectedPackageId, setLocalSelectedPackageId] = useState<number | undefined>(selectedPackageId);

  const handleChange = (id: number) => {
    setLocalSelectedPackageId(id);
    onChange?.(id);
  };

  useEffect(() => {
    setLocalSelectedPackageId(selectedPackageId);
  }, [selectedPackageId]);

  return (
    <fieldset className='relative flex flex-col gap-[40px] mt-[12px] desktop:flex-row desktop:gap-[8px]'>
      {error && (
        <div className='absolute top-0 left-0 w-full h-full scale-110 border-[2px] bg-[#f8f2f26d] border-red rounded-lg' />
      )}

      {packages.map((lessonPackage, idx) => {
        const colorsIdx = idx % LESSON_PACKAGE_COLORS.length;

        return (
          <LessonPackageCard
            id={lessonPackage.id}
            key={lessonPackage.id}
            isSelected={lessonPackage.id === localSelectedPackageId}
            bgColor={LESSON_PACKAGE_COLORS[colorsIdx].bg}
            mainColor={LESSON_PACKAGE_COLORS[colorsIdx].badgeBg}
            badgeText={lessonPackage.badgeText}
            lessonsCount={lessonPackage.lessonsCount}
            description={lessonPackage.description}
            price={lessonPackage.price}
            lessonMinutes={lessonMinutes}
            salePercent={lessonPackage.salePercent}
            learnGuaranteed={Boolean(lessonPackage.learnGuaranteed)}
            otherCardSelected={localSelectedPackageId !== undefined && localSelectedPackageId !== lessonPackage.id}
            onChange={handleChange}
            nameAttr='lesson_package'
          />
        );
      })}
    </fieldset>
  );
};

export default LessonPackageSelector;
