import React, { ReactNode } from 'react';
import { WaveIcon } from './icons';

type Props = {
  waveColor: string;
  backgroundColor: string;
  children: ReactNode;
  className?: string;
};

const FeatureSection: React.FC<Props> = (props: Props) => {
  return (
    <section
      className={props.className}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {/* Top Wave */}
      <div className='-translate-y-1/2'>
        <WaveIcon color={props.waveColor} />
      </div>
      {props.children}
      {/* Bottom Wave */}
      <div className='rotate-180 translate-y-1/2'>
        <WaveIcon color={props.waveColor} />
      </div>
    </section>
  );
};

export default FeatureSection;
