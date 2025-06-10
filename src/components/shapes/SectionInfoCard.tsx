import clsx from 'clsx';
import IconFrame from '../icons/IconFrame';
import Typography from '../semantics/Typography';
import { SectionInfoCardType } from '@/types/section-info-card.type';

const SectionInfoCard: React.FC<SectionInfoCardType> = (props) => {
  return (
    <div className='relative h-full'>
      <ul
        className={clsx(
          'home-card-right flex flex-col gap-3 justify-evenly h-full',
          props.wrapperClasses
        )}
      >
        {props.listItems.map((step, idx) => (
          <li
            key={idx}
            className='flex gap-4 max-w-[500px]'
            style={{ alignItems: props.listItemBulletIconAlignment }}
          >
            {props.useListIdxAsIcon && (
              <div className='relative inline-flex justify-center items-center px-3'>
                {/* IconFrame  */}
                <span className='inline-block absolute inset-0 z-[-1]'>
                  <IconFrame color={step.itemBulletBg} />
                </span>
                <span
                  // Icon
                  className='inline-block text-center  font-primary text-[15px] lg:text-lg font-bold text-white flex-1'
                  style={{
                    width: step.itemBulletIconSize,
                    height: step.itemBulletIconSize,
                  }}
                >
                  {step.itemBulletIcon ?? ''}
                  {props.useListIdxAsIcon && idx + 1}
                </span>
              </div>
            )}

            <div className='flex-1'>
              {/* Header */}
              {step.itemHeader && (
                <Typography
                  variant='h4'
                  className='font-primary text-offBlack mb-3 font-bold'
                >
                  {step.itemHeader}
                </Typography>
              )}

              {/* Description */}
              {step.itemDescription && (
                <Typography
                  variant='custom'
                  className='font-secondary text-black font-medium leading-[120%] '
                >
                  {step.itemDescription}
                </Typography>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Decorations */}
      {props.decorations?.map((decoration, i) => (
        <div key={i} className={decoration.decorationElWrapperClasses}>
          {decoration.decorationElement}
        </div>
      ))}
    </div>
  );
};

export default SectionInfoCard;
