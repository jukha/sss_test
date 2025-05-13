import clsx from 'clsx';

type Props = {
  checked?: boolean;
  onClick?: (v: boolean) => void;
  className?: string;
  text?: string;
};

export const CustomCheckbox: React.FC<Props> = ({
  checked,
  onClick,
  text,
  className,
}) => (
  <label
    className={clsx(
      'flex gap-2 items-center relative cursor-pointer w-full',
      className
    )}
  >
    <input
      type='checkbox'
      checked={checked}
      onChange={(e) => onClick?.(e.target.checked)}
      className='invisible w-0 h-0 absolute'
    />
    <span className='w-6 h-6 rounded-sm block bg-white border-2 border-input-border relative'>
      {checked && (
        <svg
          className='absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)]'
          width='18'
          height='17'
          viewBox='0 0 18 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16.5007 1.49898L6.98477 14.1396L1.78988 8.58648'
            stroke='#110241'
            strokeWidth='2.51534'
          />
        </svg>
      )}
    </span>
    <span className='font-medium'>{text}</span>
  </label>
);
