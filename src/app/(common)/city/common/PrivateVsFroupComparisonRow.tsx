import { TickIcon, CrossIcon } from '@/components/icons';
import Typography from '@/components/semantics/Typography';
import clsx from 'clsx';

type Props = {
  feature: {
    private: { featureHighlight: string; description: string };
    group: { featureHighlight: string; description: string };
  };
  index: number;
}

const PrivateVsGroupComparisonRow = ({ feature, index }: Props) => {
  return (
    <div
      className={clsx(
        'lg:grid grid-cols-[1fr_max-content_1fr] mt-4 pb-[26px] py-[33px] px-16 lg:pl-7 lg:pr-14 background-decoration',
        index % 2 === 0 ? 'bg-white' : 'bg-transparent'
      )}
    >
      {/* ******** */}
      {/* Column 1 */}
      {/* ******** */}
      <Typography
        variant='custom'
        className='text-xl font-secondary leading-[120%] text-green max-w-[313px] mx-auto'
      >
        <span className='font-primary font-semibold text-teal'>
          {feature.private.featureHighlight}
        </span>
        {feature.private.description}
      </Typography>

      {/* ******** */}
      {/* Column 2 */}
      {/* ******** */}
      <div className='flex gap-16 justify-center'>
        <Typography
          variant='custom'
          className='lg:hidden my-2 font-primary font-semibold leading-[120%] text-black'
        >
          vs
        </Typography>
        <span className='hidden lg:inline-block w-[29px] h-[21px]'>
          <TickIcon />
        </span>
        <span className='hidden lg:inline-block w-[19px] h-[19px]'>
          <CrossIcon />
        </span>
      </div>

      {/* ******** */}
      {/* Column 3 */}
      {/* ******** */}
      <Typography
        variant='custom'
        className='text-xl font-secondary leading-[120%] text-darkRed lg:text-end max-w-[313px] mx-auto lg:ml-auto'
      >
        <span className='font-primary font-semibold text-red'>
          {feature.group.featureHighlight}
        </span>
        {feature.group.description}
      </Typography>
    </div>
  );
};

export default PrivateVsGroupComparisonRow;
