import React from 'react';
import DesktopSwimSchoolCompetitor from './DesktopSwimSchoolCompetitor';
import MobileSwimSchoolCompetitor from './MobileSwimSchoolCompetitor';
import { SwimSchool } from './types';

type Props = {
  schoolsData: SwimSchool[];
};

const SwimSchoolCompetitor: React.FC<Props> = ({ schoolsData }) => {
  return (
    <>
      <div className='hidden desktop:block'>
        <DesktopSwimSchoolCompetitor data={schoolsData} />
      </div>
      <div className='desktop:hidden'>
        <MobileSwimSchoolCompetitor data={schoolsData} />
      </div>
    </>
  );
};

export default SwimSchoolCompetitor;
