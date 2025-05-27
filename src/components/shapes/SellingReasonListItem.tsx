import { SellingReasonType } from '@/types/selling-point-section.type';
import IconFrame from '../icons/IconFrame';
import Typography from '../semantics/Typography';

type Props = {
  reason: SellingReasonType;
};

const SellingReasonListItem: React.FC<Props> = ({ reason }) => {
  return (
    <div className='flex max-md:flex-wrap gap-6 lg:gap-11 items-start mb-16'>
      {/* Icon with frame */}
      {reason.icon && (
        <div className='max-h-[64px] relative max-w-[64px]'>
          <span className='inline-block w-full h-full relative z-1'>
            {reason.icon}
          </span>
          <span
            style={{ rotate: reason.iconRotateDeg }}
            className='absolute inline-block h-full top-0 left-0 w-full'
          >
            <IconFrame color={reason.iconFrameColor} />
          </span>
        </div>
      )}

      <div>
        {/* Title */}
        <Typography
          variant='h4'
          className='font-primary text-offBlack mb-3 font-bold'
        >
          {reason.title}
        </Typography>
        {/* Description */}
        <Typography
          variant='custom'
          className='text-base lg:text-xl leading-[120%] font-medium text-offBlack'
        >
          {reason.description}
        </Typography>
      </div>
    </div>
  );
};

export default SellingReasonListItem;
