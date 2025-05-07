import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <section className='max-w-[1440px] mx-auto px-4'>{children}</section>;
};

export default Container;
