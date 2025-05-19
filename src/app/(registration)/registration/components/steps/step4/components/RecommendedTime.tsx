import Image from 'next/image';

import { guyFace } from '@/assets';
import {useMemo} from 'react';

type Props = {
  studentsNames: string[];
  timeInMinutes: string;
};

const RecommendedTime: React.FC<Props> = ({ studentsNames, timeInMinutes }) => {
  const studentsNamesStr = useMemo(() => {
    if (studentsNames.length) return `${studentsNames[0]}'s age`;
    return `${studentsNames.map((name) => `${name}'s`).join(', ')} ages`;
  }, [studentsNames])

  return (
    <div className='flex gap-5 items-start pl-3 py-3 pr-2 rounded-[6px] bg-off-white desktop:gap-6 desktop:pl-4 desktop:py-4 desktop:pr-3 desktop:rounded-[8px]'>
      <Image
        src={guyFace}
        alt=''
        className='w-[56px] desktop:w-[70px] aspect-square shrink-0'
      />
      <div className='text-orange'>
        <p className='font-primary font-semibold text-base leading-[120%] desktop:text-medium'>
          Sunsational Expert Recommendation
        </p>
        <p className='font-medium text-[12px] leading-[120%] desktop:text-base'>
          Based on {studentsNamesStr}, we recommend {timeInMinutes} minute
          lessons
        </p>
      </div>
    </div>
  );
};

export default RecommendedTime;
