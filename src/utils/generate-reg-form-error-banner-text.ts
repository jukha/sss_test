import { RegistrationFormErrors } from '@/context/registration-form.context';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { ErrorMessagesEnum } from '@/enum/error-messages.enum';

type FieldConfig = {
  textByErrorsTypes?: Partial<Record<ErrorMessagesEnum, string>>;
};

const RegFormFieldsErrorsConfig: Partial<
  Record<keyof RegistrationForm, FieldConfig>
> = {
  zip: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'ZIP',
    },
  },
  customerHasAccessToPool: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'do you have access to pool or not',
    },
  },
  studentsCount: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'how many students need swim lessons',
    },
  },
  isCustomerAParentGuardianOfAll: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'are you a parent/guardian of all the students or not',
    },
  },
  email: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'email',
      [ErrorMessagesEnum.InvalidEmail]: 'correct email',
      [ErrorMessagesEnum.ProvideValidEmail]: 'correct email',
    },
  },
  firstName: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'first name',
    },
  },
  lastName: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'last name',
    },
  },
  phone: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'phone number',
    },
  },
  lessonFrequency: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'lesson frequency',
    },
  },
  selectedDays: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'you have selected less days than the lesson frequency that you have specified',
    },
  },
  selectedWeekdayTimes: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'what times are you available for lessons on weekdays',
    },
  },
  selectedWeekendTimes: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'what times are you available for lessons on weekends',
    },
  },
  lessonTime: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'desired total lesson length',
    },
  },
  packageSize: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'desired lessons package',
    },
  },
  customerWouldLikeToBegin: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'when would you like to begin',
    },
  },
  preferredLessonBeginDate: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'preferred lesson begin date',
    },
  },
  poolAddress: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'complete pool address (street, city, state, zip)',
      [ErrorMessagesEnum.InvalidAddress]:
        'a full address "123 Street, City, State ZIP" (your address appears incomplete)',
    },
  },
  poolType: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]: 'available pool type',
    },
  },
  maxTravelDistance: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Required]:
        'how far can you travel to your swim instructor for lessons',
    },
  },
  policiesAgreement: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Check]:
        '"I have read and agree to the Liability Release, Assumption of Risk, and Policies"',
    },
  },
  youngstersPoliciesAgreement: {
    textByErrorsTypes: {
      [ErrorMessagesEnum.Check]:
        '"I understand that for swimmers under 18..."',
    },
  },
};

export const generateRegFormErrorBannerText = (
  registrationErrors: RegistrationFormErrors
) => {
  const formatted: Record<ErrorMessagesEnum, string[]> = {
    [ErrorMessagesEnum.Required]: [],
    [ErrorMessagesEnum.Exactly5Digits]: [],
    [ErrorMessagesEnum.InvalidEmail]: [],
    [ErrorMessagesEnum.InvalidPhone]: [],
    [ErrorMessagesEnum.InvalidAddress]: [],
    [ErrorMessagesEnum.ProvideValidEmail]: [],
    [ErrorMessagesEnum.Check]: [],
  };

  Object.entries(registrationErrors).forEach(([key, error]) => {
    const fieldName = key as keyof RegistrationForm;

    const errorAsKey = error as ErrorMessagesEnum;
    const errorText =
      RegFormFieldsErrorsConfig[fieldName]?.textByErrorsTypes?.[errorAsKey];

    if (errorText) {
      formatted[errorAsKey]?.push(errorText);
    }
  });

  let finalStr = '';

  const studentsErrorsMessage =
    generateStudentsErrorsMessages(registrationErrors);

  const parentGuardiansErrorsMessage =
    generateParentGuardiansErrorsMessages(registrationErrors);

  const requiredErrors = [
    ...formatted[ErrorMessagesEnum.Required],
    ...formatted[ErrorMessagesEnum.Exactly5Digits],
    ...formatted[ErrorMessagesEnum.InvalidEmail],
    ...formatted[ErrorMessagesEnum.ProvideValidEmail],
    ...formatted[ErrorMessagesEnum.InvalidPhone],
    ...formatted[ErrorMessagesEnum.InvalidAddress],
    studentsErrorsMessage,
    parentGuardiansErrorsMessage,
  ].filter(Boolean);

  if (requiredErrors?.length) {
    finalStr += `Woops looks like some info is missing. Please provide: ${requiredErrors.join(
      ', '
    )}.`;
  }

  const checkErrors = [...formatted[ErrorMessagesEnum.Check]].filter(Boolean);

  if (checkErrors?.length) {
    finalStr += `Please check:\n${checkErrors.join(
      ',\n'
    )}.`;
  }

  return finalStr;
};

const generateStudentsErrorsMessages = (
  registrationErrors: RegistrationFormErrors
) => {
  let emptyNames = '';
  let emptyAges = '';

  Object.entries(registrationErrors).forEach(([fieldName, error]) => {
    if (error === ErrorMessagesEnum.Required) {
      if (fieldName.startsWith('studentName')) {
        emptyNames = 'all students names';
      }

      if (fieldName.startsWith('studentAge')) {
        emptyAges = 'all students ages';
      }
    }
  });

  return `${[emptyNames, emptyAges].filter(Boolean).join(' and ')}`;
};

const generateParentGuardiansErrorsMessages = (
  registrationErrors: RegistrationFormErrors
) => {
  let emptyNames = '';
  let emptyEmails = '';

  Object.entries(registrationErrors).forEach(([fieldName, error]) => {
    if (
      [
        ErrorMessagesEnum.Required,
        ErrorMessagesEnum.ProvideValidEmail,
      ].includes(error as ErrorMessagesEnum)
    ) {
      if (fieldName.startsWith('parentGuardianName')) {
        emptyNames = 'all parent/guardians names';
      }

      if (fieldName.startsWith('parentGuardianEmail')) {
        emptyEmails = 'all parent/guardians emails';
      }
    }
  });

  return `${[emptyNames, emptyEmails].filter(Boolean).join(' and ')}`;
};
