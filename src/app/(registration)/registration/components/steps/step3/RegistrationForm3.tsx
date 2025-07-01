import CustomInput from '@/components/CustomInput';
import CustomCurveButton from '../../shared/CustomCurveButton';
import AlertBox from '../../shared/AlertBox';
import GoBackTextButton from '../../shared/GoBackTextButton';
import AdditionalParentGuardian from './components/AdditionalParentGuardian';
import { blackArrow, mail, mobile, personIcon } from '@/assets';
import { useRegistrationForm } from '@/context/registration-form.context';
import { BuildOnFieldFocusLostHandlerFunction } from '../../../types';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { useState } from 'react';
import { validateFormStep } from '../../../logic/validation';
import { validateUserAndGuardiansEmails } from '../../../logic/emails-validation';
import { apiClient } from '@/api_client/api.client';

type Props = {
  onNextClicked: (options?: { shouldNotSwitchToNextStep?: boolean }) => Promise<void>;
  onPreviousClicked: () => Promise<void>;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
};

const formatPhoneNumber = (v: string | null | undefined) => {
  if (!v) {
    return '';
  }

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

const RegistrationForm3: React.FC<Props> = ({ onNextClicked, onPreviousClicked, buildOnFieldFocusLostHandler }) => {
  const {
    registrationForm,
    setRegistrationFormField,
    registrationStep,
    setRegistrationErrors,
    registrationErrors,
    registrationErrorsText,
  } = useRegistrationForm();
  const [validating, setValidating] = useState(false)
  const [emailsBottomErrors, setEmailsBottomErrors]=useState<Partial<Record<keyof RegistrationForm, string>>>({})

  const showAdditionalParentGuardians = !registrationForm?.isCustomerAParentGuardianOfAll;
  const currentUserFullName = `${registrationForm?.firstName ?? ''} ${registrationForm?.lastName ?? ''}`;
  const studentsCount = registrationForm?.studentsCount ?? 0;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateFormStep(registrationForm, registrationStep);

    if (validationErrors || (registrationErrors && Object.keys(registrationErrors).length !== 0)) {
      setRegistrationErrors({ ...registrationErrors, ...validationErrors });
      return;
    } else {
      setRegistrationErrors({});
    }

    setValidating(true);

    try {
      const emailValidationErrors = await validateUserAndGuardiansEmails(registrationForm);

      if (emailValidationErrors && Object.keys(emailValidationErrors).length) {
        setRegistrationErrors(emailValidationErrors);
        // Implement setting focus to the first erronous e-mail field?
      }
    } finally {
      setValidating(false);
    }

    await onNextClicked();
  };

  const validateSingleEmail = async (fieldName: keyof RegistrationForm, value?: string) => {
    const email = value ?? (registrationForm?.[fieldName] ?? '') as string
    if (!email.trim().length || validating) return;

    const { data } = await apiClient.emailValidation.validateSingle(email);
    if (validating || registrationErrors?.[fieldName] || !data.errorMessage) return;

    if (!data.isValid) {
      // TODO replace with errors enum
      setRegistrationErrors({ ...registrationErrors, [fieldName]: 'Invalid E-mail' })
    } else {
      // suggest replace mail->gmail etc
      setEmailsBottomErrors(prev => ({ ...prev, [fieldName]: data.errorMessage }))
    }
  }

  const removeEmailBottomError = (fieldName: keyof RegistrationForm) => {
    setEmailsBottomErrors(prev => ({ ...prev, [fieldName]: '' }))
  }

  const handleEmailChange = (fieldName: keyof RegistrationForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationFormField(fieldName, e.target.value);
    removeEmailBottomError(fieldName);

    if (/.*@.*\.(com|co|org|net)$/.test(e.target.value)) {
      validateSingleEmail(fieldName, e.target.value);
    }
  }

  const handleEmailFieldBlur = (fieldName: keyof RegistrationForm) => () => {
    buildOnFieldFocusLostHandler(fieldName)
    validateSingleEmail(fieldName)
  }

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton text='Guardian/Parent Details' onClick={onPreviousClicked} />

      <form onSubmit={submitHandler} className='flex flex-col gap-[34px]'>
        <div className='flex flex-col gap-8 font-secondary font-medium font-'>
          <div className='flex gap-8 flex-col sm:flex-row'>
            <CustomInput
              value={registrationForm?.firstName || ''}
              error={registrationErrors?.firstName}
              text='First Name*'
              icon={personIcon}
              onChange={(e) => {
                setRegistrationFormField('firstName', e.target.value);
              }}
              onBlur={buildOnFieldFocusLostHandler('firstName')}
            />

            <CustomInput
              value={registrationForm?.lastName || ''}
              error={registrationErrors?.lastName}
              text='Last Name*'
              icon={personIcon}
              onChange={(e) => {
                setRegistrationFormField('lastName', e.target.value);
              }}
              onBlur={buildOnFieldFocusLostHandler('lastName')}
            />
          </div>

          <CustomInput
            value={registrationForm?.email || ''}
            error={registrationErrors?.email}
            text='Email Address*'
            icon={mail}
            type='email'
            onChange={handleEmailChange('email')}
            onBlur={handleEmailFieldBlur('email')}
            bottomError={emailsBottomErrors.email}
          />

          <CustomInput
            value={formatPhoneNumber(registrationForm?.phone)}
            error={registrationErrors?.phone}
            onChange={(e) => {
              setRegistrationFormField('phone', formatPhoneNumber(e.target.value));
            }}
            text='Phone Number*'
            icon={mobile}
            type='phone'
            inputMode='numeric'
            onBlur={buildOnFieldFocusLostHandler('phone')}
          />
        </div>

        {showAdditionalParentGuardians && (
          <div>
            <p className='text-2xl font-primary font-bold mb-4 desktop:mb-5'>Additional Parent/Guardians</p>

            <div className='flex flex-col gap-8 desktop:gap-10'>
              {Array.from({ length: studentsCount }).map((_, i) => {
                const studentNameKey = `studentName${i + 1}` as keyof RegistrationForm;
                const parentGuardianNameKey = `parentGuardianName${i + 1}` as keyof RegistrationForm;
                const parentGuardianEmailKey = `parentGuardianEmail${i + 1}` as keyof RegistrationForm;

                return (
                  <AdditionalParentGuardian
                    key={i}
                    studentName={(registrationForm?.[studentNameKey] ?? '') as string}
                    currentUserName={currentUserFullName}
                    currentUserEmail={registrationForm?.email ?? ''}
                    name={(registrationForm?.[parentGuardianNameKey] ?? '') as string}
                    email={(registrationForm?.[parentGuardianEmailKey] ?? '') as string}
                    nameError={registrationErrors?.[parentGuardianNameKey]}
                    emailError={registrationErrors?.[parentGuardianEmailKey]}
                    onNameChange={(e) => {
                      setRegistrationFormField(parentGuardianNameKey, e.target.value);
                    }}
                    onEmailChange={handleEmailChange(parentGuardianEmailKey)}
                    setName={(value) => {
                      setRegistrationFormField(parentGuardianNameKey, value);
                    }}
                    setEmail={(value) => {
                      setRegistrationFormField(parentGuardianEmailKey, value);
                      removeEmailBottomError(parentGuardianEmailKey)
                    }}
                    onNameBlur={buildOnFieldFocusLostHandler(parentGuardianNameKey)}
                    onEmailBlur={handleEmailFieldBlur(parentGuardianEmailKey)}
                    emailBottomError={emailsBottomErrors[parentGuardianEmailKey]}
                  />
                );
              })}
            </div>
          </div>
        )}

        {registrationErrorsText && <AlertBox type='error' text={registrationErrorsText} />}

        <div className='flex justify-center'>
          <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
            <CustomCurveButton
              type='submit'
              text={validating ? 'Validating...' : 'Continue'}
              disabled={validating}
              icon={blackArrow}
            />
          </div>
        </div>
      </form>

      <div className='flex justify-center'>
        <GoBackTextButton size='small' text='Back to student details' onClick={onPreviousClicked} />
      </div>
    </div>
  );
};

export default RegistrationForm3;
