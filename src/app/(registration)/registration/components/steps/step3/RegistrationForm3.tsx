import CustomInput from '@/components/CustomInput';
import CustomCurveButton from '@/components/CustomCurveButton';
import AlertBox from '../../shared/AlertBox';
import GoBackTextButton from '../../shared/GoBackTextButton';
import AdditionalParentGuardian from './components/AdditionalParentGuardian';
import {blackArrow, mail, mobile, personIcon} from '@/assets';
import { useRegistrationForm } from '@/context/registration-form.context';
import {
  BuildOnFieldChangedHandlerFunction,
  BuildOnFieldChangedEventHandler,
  BuildOnFieldFocusLostHandlerFunction
} from '../../../types';


type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
  buildOnFieldChangedHandler: BuildOnFieldChangedHandlerFunction;
  buildOnFieldChangedEventHandler: BuildOnFieldChangedEventHandler;
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


const RegistrationForm3: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
  buildOnFieldChangedHandler,
  buildOnFieldChangedEventHandler,
  buildOnFieldFocusLostHandler,
}) => {

  const {
    registrationForm,
    registrationErrors,
    registrationErrorsText
  } = useRegistrationForm();

  const showAdditionalParentGuardians = !registrationForm?.isCustomerAParentGuardianOfAll;

  const getStudentsCount = () => {
    return registrationForm?.studentsCount || 0;
  };

  const setFirstName = buildOnFieldChangedEventHandler('firstName');
  const setLastName = buildOnFieldChangedEventHandler('lastName');
  const setEmail = buildOnFieldChangedEventHandler('email');

  const setPhoneHandler = buildOnFieldChangedHandler('phone');
  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneHandler(formatPhoneNumber(e.target.value));
  };

  const onParentGuardianNameChangeHandlers: ((e: React.ChangeEvent<HTMLInputElement>) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    onParentGuardianNameChangeHandlers[i] = buildOnFieldChangedEventHandler(`parentGuardianName${i}`);
  }

  const onParentGuardianEmailChangeHandlers: ((e: React.ChangeEvent<HTMLInputElement>) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    onParentGuardianEmailChangeHandlers[i] = buildOnFieldChangedEventHandler(`parentGuardianEmail${i}`);
  }

  const setParentGuardianNameHandlers: ((name: string) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    setParentGuardianNameHandlers[i] = buildOnFieldChangedHandler(`parentGuardianName${i}`);
  }

  const setParentGuardianEmailHandlers: ((email: string) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    setParentGuardianEmailHandlers[i] = buildOnFieldChangedHandler(`parentGuardianEmail${i}`);
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextClicked();
  };

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton
        text='Guardian/Parent Details'
        onClick={onPreviousClicked}
      />

      <form onSubmit={submitHandler} className='flex flex-col gap-[34px]'>
        <div className='flex flex-col gap-8 font-secondary font-medium font-'>
          <div className='flex gap-8 flex-col sm:flex-row'>
            <CustomInput
              value={registrationForm?.firstName || ''}
              error={registrationErrors?.firstName}
              text='First Name*'
              icon={personIcon}
              onChange={setFirstName}
              onBlur={buildOnFieldFocusLostHandler('firstName')}
            />

            <CustomInput
              value={registrationForm?.lastName || ''}
              error={registrationErrors?.lastName}
              text='Last Name*'
              icon={personIcon}
              onChange={setLastName}
              onBlur={buildOnFieldFocusLostHandler('lastName')}
            />
          </div>

          <CustomInput
            value={registrationForm?.email || ''}
            error={registrationErrors?.email}
            text='Email Address*'
            icon={mail}
            type='email'
            onChange={setEmail}
            onBlur={buildOnFieldFocusLostHandler('email')}
          />

          <CustomInput
            value={formatPhoneNumber(registrationForm?.phone)}
            error={registrationErrors?.phone}
            onChange={setPhone}
            text='Phone Number*'
            icon={mobile}
            type='phone'
            inputMode='numeric'
            onBlur={buildOnFieldFocusLostHandler('phone')}
          />
        </div>

        {showAdditionalParentGuardians && (
          <div>
            <p className='text-2xl font-primary font-bold mb-4 desktop:mb-5'>
              Additional Parent/Guardians
            </p>

            <div className='flex flex-col gap-8 desktop:gap-10'>
              {Array.from({ length: getStudentsCount() }).map((_, i) => (
                <AdditionalParentGuardian
                  key={i}
                  // @ts-expect-error Dynamic field name construction
                  studentName={registrationForm?.[`studentName${i+1}`] || ''}
                  currentUserName={`${registrationForm?.firstName || ''} ${registrationForm?.lastName || ''}`}
                  currentUserEmail={registrationForm?.email || ''}
                  // @ts-expect-error Dynamic field name construction
                  name={registrationForm?.[`parentGuardianName${i+1}`] || ''}
                  // @ts-expect-error Dynamic field name construction
                  email={registrationForm?.[`parentGuardianEmail${i+1}`] || ''}
                  // @ts-expect-error Dynamic field name construction
                  nameError={registrationErrors?.[`parentGuardianName${i+1}`]}
                  // @ts-expect-error Dynamic field name construction
                  emailError={registrationErrors?.[`parentGuardianEmail${i+1}`]}
                  onNameChange={onParentGuardianNameChangeHandlers[i+1]}
                  onEmailChange={onParentGuardianEmailChangeHandlers[i+1]}
                  setName={setParentGuardianNameHandlers[i+1]}
                  setEmail={setParentGuardianEmailHandlers[i+1]}
                  // @ts-expect-error Dynamic field name construction
                  onNameBlur={buildOnFieldFocusLostHandler(`parentGuardianName${i+1}`)}
                  // @ts-expect-error Dynamic field name construction
                  onEmailBlur={buildOnFieldFocusLostHandler(`parentGuardianEmail${i+1}`)}
                />
              ))}
            </div>
          </div>
        )}

        {registrationErrorsText && (
          <AlertBox
            type='error'
            text={registrationErrorsText}
          />
        )}

        <div className='flex justify-center'>
          <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
            <CustomCurveButton
              type='submit'
              text='Continue'
              icon={blackArrow}
            />
          </div>
        </div>
      </form>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to student details'
          onClick={onPreviousClicked}
        />
      </div>
    </div>
  );
};


export default RegistrationForm3;
