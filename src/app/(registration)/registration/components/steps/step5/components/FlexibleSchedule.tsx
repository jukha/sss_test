import CustomButton from '../../../shared/CustomButton';
import CustomSwitcher from '../../../shared/CustomSwitcher';
import React, { useState } from 'react';
import AlertBox from '../../../shared/AlertBox';
import { minus, plus } from '@/assets';
import CustomTextArea from '../../../shared/CustomTextArea';

type Props = {
  flexibleScheduleChecked?: boolean;
  initialFlexibleScheduleChecked?: boolean;
  initialAdditionalSchedulingInformation?: string;
  additionalSchedulingInformation?: string;
  onAdditionalSchedulingInformationChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFlexibleScheduleCheckedChange?: (checked: boolean) => void;
};

const FlexibleSchedule: React.FC<Props> = ({
  flexibleScheduleChecked,
  additionalSchedulingInformation,
  onAdditionalSchedulingInformationChange,
  onFlexibleScheduleCheckedChange,
}) => {
  const [showTextArea, setShowTextArea] = useState(() => Boolean(additionalSchedulingInformation));
  const checked = Boolean(flexibleScheduleChecked);

  return (
    <div className='flex flex-col gap-6'>
      <label className='flex items-center gap-2 w-max cursor-pointer'>
        <span className='font-medium'>
          Flexible
          <br />
          Scheduling
        </span>

        <CustomSwitcher
          checked={checked}
          initialChecked={Boolean(flexibleScheduleChecked)}
          onChange={onFlexibleScheduleCheckedChange}
        />
      </label>

      <AlertBox
        text={
          checked ? (
            <>
              FASTEST INSTRUCTOR MATCHING
              <br />
              My schedule can be flexible to additional lesson times for the right swim instructor
            </>
          ) : (
            <>
              SLOWER INSTRUCTOR MATCHING
              <br />I am only open to instructors who can teach within my exact listed availability
            </>
          )
        }
        type='info'
      />

      <hr />

      <CustomButton
        text={'Additional scheduling info'}
        onClick={() => setShowTextArea((prev) => !prev)}
        icon={showTextArea ? minus : plus}
        className='text-start flex-row-reverse p-[16px] desktop:w-[90%] !bg-lightBlue !w-[226px]'
        textClassName='text-sm leading-[120%] text-offBlack'
      />

      {showTextArea && (
        <CustomTextArea
          value={additionalSchedulingInformation ?? ''}
          onChange={onAdditionalSchedulingInformationChange}
          placeholder='Tell us about what works best for your schedule'
          rows={5}
        />
      )}
    </div>
  );
};

export default FlexibleSchedule;
