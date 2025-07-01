import { ReactNode, ComponentProps } from 'react';
import Typography from '../semantics/Typography';

type DynamicHeadingProps = {
  level: number;
  children: ReactNode;
} & ComponentProps<'h1'>;

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4';

const DynamicHeading = ({ level, children, ...props }: DynamicHeadingProps) => {
  const variant = `h${Math.min(Math.max(level, 1), 4)}` as HeadingVariant;

  return (
    <Typography className={`text-black ${props.className ?? ''}`} variant={variant}>
      {children}
    </Typography>
  );
};

export default DynamicHeading;
