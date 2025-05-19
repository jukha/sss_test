import CustomInput from '@/components/CustomInput';
import {CustomCheckbox} from '@/components/CustomCheckbox';
import { mail, personIcon} from '@/assets';
import { useState, useEffect } from 'react';


type AdditionalParentGuardianProps = {
  studentName: string;
  currentUserName: string;
  currentUserEmail: string;
  nameError?: string;
  emailError?: string;
  // initialData?: { name: string; email: string };
  name: string;
  email: string;
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  onNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNameBlur?: () => void;
  onEmailBlur?: () => void;
};

const AdditionalParentGuardian: React.FC<AdditionalParentGuardianProps> = ({
  studentName,
  currentUserName,
  currentUserEmail,
  nameError,
  emailError,
  // initialData,
  name,
  email,
  setName,
  setEmail,
  onNameChange,
  onNameBlur,
  onEmailChange,
  onEmailBlur
}) => {
  const [isCurrentUserParentOrGuard, setIsCurrentUserParentOrGuard] = useState(
    () => Boolean(name && name === currentUserName && email && email === currentUserEmail)
  );

  useEffect(() => {
    if (isCurrentUserParentOrGuard) {
      setEmail(currentUserEmail);
      setName(currentUserName);
    }
  }, [isCurrentUserParentOrGuard, currentUserName, currentUserEmail]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1 p-2 desktop:flex-row desktop:justify-between desktop:gap-4 desktop:py-[18px] desktop:px-[10px] bg-[#EEFCFF] rounded-lg'>
        <div className='font-bold desktop:text-[18px]'>{studentName}</div>
        <div>
          <CustomCheckbox
            checked={isCurrentUserParentOrGuard}
            onClick={(v) => setIsCurrentUserParentOrGuard(v)}
            text='I am the parent/guardian'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 desktop:flex-row desktop:gap-4'>
        <CustomInput
          value={name || ''}
          error={nameError}
          text='Parent Name*'
          icon={personIcon}
          disabled={isCurrentUserParentOrGuard}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        <CustomInput
          value={email || ''}
          error={emailError}
          type='email'
          text='Parent email*'
          icon={mail}
          disabled={isCurrentUserParentOrGuard}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
      </div>
    </div>
  );
};

export default AdditionalParentGuardian;
