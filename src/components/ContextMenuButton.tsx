import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type Props = {
  text: string;
  icon?: string | StaticImageData;
  className?: string;
  onClick?: () => void;
};

const ContextMenuButton: React.FC<Props> = ({
  text,
  icon,
  className,
  onClick,
}) => {
  return (
    <div
      className={clsx('flex gap-[10px] px-[10px] py-[4px] bg-white cursor-pointer rounded-[10px] hover:bg-lightBlue hover:text-white', className)}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <Image src={icon} alt='icon' />}
    </div>
  );
};

export default ContextMenuButton;
