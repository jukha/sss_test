type Props = {
  checked?: boolean;
};

export const CustomCheckbox: React.FC<Props> = ({ checked }) => (
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
);
