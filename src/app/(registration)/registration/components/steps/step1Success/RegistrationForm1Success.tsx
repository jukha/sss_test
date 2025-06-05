import React from 'react';
import {blackArrow, boyAndMom} from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import Image from 'next/image';
import { useRegistrationForm } from '@/context/registration-form.context';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';

type Props = {
  onNextClicked: () => void;
}

const RegistrationForm1Success: React.FC<Props> = ({
  onNextClicked
}) => {
  const { registrationForm } = useRegistrationForm();
  const locationsAndPricing = useLocationsAndPricing();

  const findMetroAreaByZip = (zip: string | null | undefined) => {
    const zipCodeRecord = locationsAndPricing?.data?.zipCodesServiced?.find(d => d.zip === zip);
    const metroAreaId = zipCodeRecord?.metroAreaId;
    return locationsAndPricing?.data?.metroAreas?.find(d => d.id === metroAreaId);
  };

  const metroArea = findMetroAreaByZip(registrationForm?.zip);

  return (
    <div className='flex flex-col gap-[30px] items-center w-full'>
      <span className="flex gap-[10px] items-center font-bold leading-[120%] font-primary self-start text-[24px] text-offBlack">Splashing! We have excellent Swim Instructors in {metroArea?.name || ''}, {metroArea?.stateAbbreviation || ''}!</span>

      <Image src={boyAndMom} alt='picture' />

      <CustomCurveButton
        text='Continue'
        onClick={onNextClicked}
        icon={blackArrow}
      />
    </div>
  );
};

export default RegistrationForm1Success;
