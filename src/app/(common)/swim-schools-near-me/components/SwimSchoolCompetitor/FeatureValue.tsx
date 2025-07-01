import React from 'react';

type Props = {
  value: React.ReactNode;
  symbol?: 'tick' | 'cross';
};

const FeatureValue: React.FC<Props> = ({ value, symbol }) => {
  if (symbol === 'tick') {
    return (
      <>
        <span className='text-teal'>✔</span>{' '}
        <span>{value}</span>
      </>
    );
  }

  if (symbol === 'cross') {
    return (
      <>
        <span className='text-red'>✘</span>{' '}
        <span>{value}</span>
      </>
    );
  }

  return <>{value}</>;
};

export default FeatureValue;
