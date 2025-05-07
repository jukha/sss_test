import React, { ReactNode } from 'react';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'custom';

interface TypographyProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  h1: `text-5xl md:text-8xl text-white font-bold font-primary leading-[115%] md:leading-[100%]`, //96px
  h2: 'text-[40px] md:text-[64px] text-darkBlue font-primary font-bold leading-[115%]', // 64px
  h3: 'text-[32px] md:text-5xl text-darkBlue font-bold leading-[115%] md:leading-[110%]', // 48px
  h4: 'text-[24px] md:text-[32px]', //32 px
  h5: 'text-xl font-medium',
  h6: 'text-lg font-medium',
  subtitle1: 'text-base',
  subtitle2: 'text-sm',
  body1: 'text-[18px] md:text-2xl', // 24px
  body2: 'text-[18px] md:text-xl', // 20px
  body3: 'text-base leading-[120%] font-secondary', // 16px
  caption: 'text-xs',
  custom: ''
};

// Mapping variants to HTML tags
const variantTags: Record<Variant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p', // Use <p> tag for subtitle1
  subtitle2: 'p', // Use <p> tag for subtitle2
  body1: 'p', // Use <p> tag for body1
  body2: 'p', // Use <p> tag for body2
  body3: 'p', // Use <p> tag for body3
  caption: 'span', // Use <span> for captions
  custom: 'p'
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1', // default to body1
  className = '',
  children,
}) => {
  // Select the appropriate tag from the mapping
  const Tag = variantTags[variant];

  return (
    <Tag className={`${variantClasses[variant]} ${className} `}>{children}</Tag>
  );
};

export default Typography;
