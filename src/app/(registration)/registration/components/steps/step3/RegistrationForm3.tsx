import React, { useEffect, useLayoutEffect, useState } from 'react';

import CustomInput from '@/components/CustomInput';
import CustomCurveButton from '@/components/CustomCurveButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import { mobile, mail, personIcon, blackArrow } from '@/assets';
import { Step3Fields } from '@/entities/registration-form.entity';
import {
  emailSchema,
  nameSchema,
  step3Schema,
} from '@/app/api/registration/step/schemas/step.schemas';
import { extractZodErrors } from '@/utils/extract-zod-errors';
import GoBackTextButton from '../../shared/GoBackTextButton';

type Fields = Step3Fields;

type Props = {
  initialValues?: Partial<Fields>;
  studentsNames?: string[];
  onSubmit?: (fields: Fields) => void;
  onBackClick?: () => void;
};

const validationSchema = step3Schema;

const getPhoneNumber = (v: string) => {
  let phoneNumber = v.replace(/\D/g, '');

  phoneNumber = phoneNumber.substring(0, 10);

  let formatted = '';
  if (phoneNumber.length > 0) {
    formatted = '(' + phoneNumber.substring(0, 3);
  }
  if (phoneNumber.length > 3) {
    formatted += ') ' + phoneNumber.substring(3, 6);
  }
  if (phoneNumber.length > 6) {
    formatted += '-' + phoneNumber.substring(6, 10);
  }

  return formatted;
};

const RegistrationForm3: React.FC<Props> = ({
  initialValues,
  studentsNames,
  onSubmit,
  onBackClick,
}) => {
  const [state, setState] = useState<Fields>(() => ({
    firstName: initialValues?.firstName ?? '',
    lastName: initialValues?.lastName ?? '',
    email: initialValues?.email ?? '',
    phone: initialValues?.phone ? getPhoneNumber(initialValues.phone) : '',
    parentGuardians:
      initialValues?.parentGuardians ??
      (studentsNames ?? []).map(() => ({ name: '', email: '' })),
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {}
  );
  const [parentGuardiansErrors, setParentGuardiansErrors] = useState<
    { name: string; email: string }[]
  >(() => (studentsNames ?? []).map(() => ({ name: '', email: '' })));
  const [initialErrors, setInitialErrors] = useState(false);

  const fullParentName =
    state.firstName || state.lastName
      ? `${state.firstName ?? ''}${' ' + (state.lastName ?? '')}`
      : '';

  const showAdditionalParentGuardians =
    studentsNames && studentsNames.length > 0;

  const hasEmptyRequiredFields =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.phone ||
    state.parentGuardians?.some((pgData) => !pgData.name || !pgData.email);

  const disableSubmitBtn =
    initialErrors ||
    Object.values(errors).some(Boolean) ||
    parentGuardiansErrors.some((pgErr) => Object.values(pgErr).some(Boolean)) ||
    hasEmptyRequiredFields;

  const updateState = (key: keyof Fields, value: string) => {
    if (initialErrors) {
      setInitialErrors(false);
    }

    let finalValue = '';

    if (key === 'phone') {
      finalValue = getPhoneNumber(value);
    } else {
      finalValue = value;
    }

    const result = { ...state, [key]: finalValue };

    setState(result);
    setErrors({
      ...errors,
      [key]: extractZodErrors(validationSchema.safeParse(result))?.[key] ?? '',
    });
  };

  const updateParentGuardians = (
    idx: number,
    key: 'name' | 'email',
    value: string
  ) => {
    const result: Fields = {
      ...state,
      parentGuardians: state.parentGuardians?.map((pg, i) =>
        idx === i ? { ...pg, [key]: value } : pg
      ),
    };

    const shouldValidate =
      state.parentGuardians?.[idx]?.[key] !==
      result.parentGuardians?.[idx]?.[key];

    setState(() => result);

    if (shouldValidate) {
      if (initialErrors) {
        setInitialErrors(false);
      }
      let errorMessage = '';

      if (key === 'name') {
        errorMessage =
          nameSchema.safeParse(value).error?.errors[0]?.message ?? '';
      } else {
        errorMessage =
          emailSchema.safeParse(value).error?.errors[0]?.message ?? '';
      }

      setParentGuardiansErrors(
        parentGuardiansErrors.map((pgErr, i) =>
          idx === i
            ? {
                ...pgErr,
                [key]: errorMessage,
              }
            : pgErr
        )
      );
    }
  };

  const backClickHandler = () => onBackClick?.();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(state);
  };

  useLayoutEffect(() => {
    const initialErrors = extractZodErrors(validationSchema.safeParse(state));
    setInitialErrors(
      Boolean(initialErrors && Object.values(initialErrors).length)
    );
  }, []);

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton
        text='Guardian/Parent Details'
        onClick={backClickHandler}
      />

      <form onSubmit={submitHandler} className='flex flex-col gap-[34px]'>
        <div className='flex flex-col gap-8 font-secondary font-medium font-'>
          <div className='flex gap-8 flex-col sm:flex-row'>
            <CustomInput
              value={state.firstName ?? ''}
              error={errors.firstName}
              text='First Name*'
              icon={personIcon}
              onChange={(e) => updateState('firstName', e.target.value)}
            />

            <CustomInput
              value={state.lastName ?? ''}
              error={errors.lastName}
              text='Last Name*'
              icon={personIcon}
              onChange={(e) => updateState('lastName', e.target.value)}
            />
          </div>

          <CustomInput
            value={state.email ?? ''}
            error={errors.email}
            text='Email Address*'
            icon={mail}
            type='email'
            onChange={(e) => updateState('email', e.target.value)}
          />

          <CustomInput
            value={state.phone ?? ''}
            error={errors.phone}
            onChange={(e) => updateState('phone', e.target.value)}
            text='Phone Number*'
            icon={mobile}
            type='phone'
            inputMode='numeric'
          />
        </div>

        {showAdditionalParentGuardians && (
          <div>
            <p className='text-2xl font-primary font-bold mb-4 desktop:mb-5'>
              Additional Parent/Guardians
            </p>

            <div className='flex flex-col gap-8 desktop:gap-10'>
              {studentsNames.map((name, idx) => (
                <AdditionalParentGuard
                  key={idx}
                  studentName={name}
                  currentUserName={fullParentName}
                  currentUserEmail={state.email ?? ''}
                  nameError={parentGuardiansErrors[idx]?.name}
                  emailError={parentGuardiansErrors[idx]?.email}
                  initialData={state.parentGuardians?.[idx]}
                  onNameChange={(name) =>
                    updateParentGuardians(idx, 'name', name)
                  }
                  onEmailChange={(email) =>
                    updateParentGuardians(idx, 'email', email)
                  }
                />
              ))}
            </div>
          </div>
        )}

        <div className='flex justify-center'>
          <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
            <CustomCurveButton
              type='submit'
              text='Continue'
              icon={blackArrow}
              disabled={disableSubmitBtn}
            />
          </div>
        </div>
      </form>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to student details'
          onClick={backClickHandler}
        />
      </div>
    </div>
  );
};

export default RegistrationForm3;

type AdditionalParentGuardProps = {
  studentName: string;
  currentUserName: string;
  currentUserEmail: string;
  nameError?: string;
  emailError?: string;
  initialData?: { name: string; email: string };
  onNameChange?: (val: string) => void;
  onEmailChange?: (val: string) => void;
};

const AdditionalParentGuard: React.FC<AdditionalParentGuardProps> = ({
  studentName,
  currentUserName,
  currentUserEmail,
  nameError,
  emailError,
  initialData,
  onNameChange,
  onEmailChange,
}) => {
  const [isCurrentUserParentOrGuard, setIsCurrentUserParentOrGuard] = useState(
    () => Boolean(initialData?.name && initialData.name === currentUserName)
  );
  const [name, setName] = useState(() => initialData?.name ?? '');
  const [email, setEmail] = useState(() => initialData?.email ?? '');

  useEffect(() => {
    if (isCurrentUserParentOrGuard) {
      setName(currentUserName);
      setEmail(currentUserEmail);
    }
  }, [isCurrentUserParentOrGuard, currentUserName, currentUserEmail]);

  useEffect(() => {
    onNameChange?.(name);
  }, [name]);

  useEffect(() => {
    onEmailChange?.(email);
  }, [email]);

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
          value={name}
          error={nameError}
          text='Parent Name*'
          icon={personIcon}
          disabled={isCurrentUserParentOrGuard}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          value={email}
          error={emailError}
          type='email'
          text='Parent email*'
          icon={mail}
          disabled={isCurrentUserParentOrGuard}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};
