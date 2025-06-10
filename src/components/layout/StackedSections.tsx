import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const StackedSections: React.FC<Props> = ({ children }) => {
  return <article>{children}</article>;
};

export default StackedSections;
