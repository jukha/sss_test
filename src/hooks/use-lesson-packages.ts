import { useEffect, useState } from 'react';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { useRegistrationForm } from '@/context/registration-form.context';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';

const MOCK_LESSON_PACKAGES: LessonPackageEntity[] = [
  {
    badgeText: 'best value',
    lessonsCount: 18,
    description: 'The Champ',
    price: 90,
    salePercent: 10,
    learnGuaranteed: true,
  },
  {
    badgeText: 'best value',
    lessonsCount: 18,
    description: 'The Champ',
    price: 90,
    salePercent: 10,
    learnGuaranteed: true,
  },
  {
    badgeText: 'best value',
    lessonsCount: 18,
    description: 'The Champ',
    price: 90,
    salePercent: 10,
    learnGuaranteed: true,
  },
];

// incapsulate all logic here
const useLessonsPackages = () => {
  const { setShowLessonsPackageSummary } = useRegistrationForm();
  const { loading } = useLocationsAndPricing();
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>();
  const selectedPackage = selectedPackageIndex
    ? MOCK_LESSON_PACKAGES[selectedPackageIndex]
    : undefined;

  useEffect(() => {
    setShowLessonsPackageSummary(selectedPackageIndex !== undefined);
  }, [selectedPackage]);

  return {
    loading,
    packages: MOCK_LESSON_PACKAGES,
    studentsNames: ['Bobby', 'Margo', 'Jack'],
    lessonsMinutes: [30, 45, 60] as [number, number, number],
    recommendedTime: 30,
    selectedPackage,
    setSelectedPackageIndex,
  };
};

export default useLessonsPackages;
