import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={`max-w-[1440px] mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
