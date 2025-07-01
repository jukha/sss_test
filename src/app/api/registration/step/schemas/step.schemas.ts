// import { Step3Fields } from '@/entities/registration-form.entity';
import { z } from 'zod';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { DaysEnum, WEEKDAYS_ARRAY, WEEKENDS_ARRAY } from '@/enum/days.enum';
import { WhenToBeginEnum } from '@/enum/when-to-begin.enum';
import { ErrorMessagesEnum } from '@/enum/error-messages.enum';

export const ERROR_MESSAGES = {
  required: ErrorMessagesEnum.Required,
  invalidZip: ErrorMessagesEnum.Exactly5Digits, //'Invalid ZIP'
  invalidEmail: ErrorMessagesEnum.InvalidEmail,
  invalidPhone: ErrorMessagesEnum.InvalidPhone,
  invalidAddress: ErrorMessagesEnum.InvalidAddress,
  check: ErrorMessagesEnum.Check
};

export const nameSchema = z
  .string({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  })
  .min(1, ERROR_MESSAGES.required);

export const emailSchema = z
  .string({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.required,
  })
  .min(1, ERROR_MESSAGES.required)
  .email(ERROR_MESSAGES.invalidEmail);

const step1Schema = z.object({
  zip: z
    .string({
      required_error: ERROR_MESSAGES.required,
      invalid_type_error: ERROR_MESSAGES.invalidZip,
    })
    .length(5, ERROR_MESSAGES.invalidZip)
    .regex(new RegExp(/^\d{5}$/), ERROR_MESSAGES.invalidZip),

  customerHasAccessToPool: z.boolean(),
});

const step2SchemaPlain = z.object({
  studentsCount: z
    .number({
      required_error: ERROR_MESSAGES.required,
    })
    .min(1)
    .max(6),

  isCustomerAParentGuardianOfAll: z.boolean(),

  questionsOfInformationWeShouldNowAboutTheStudents: z.string().optional(),
});

const step2SchemaStudents = z
  .object({
    studentsCount: z.number(),

    studentName1: nameSchema.optional(),
    studentName2: nameSchema.optional(),
    studentName3: nameSchema.optional(),
    studentName4: nameSchema.optional(),
    studentName5: nameSchema.optional(),
    studentName6: nameSchema.optional(),

    studentAge1: nameSchema.optional(),
    studentAge2: nameSchema.optional(),
    studentAge3: nameSchema.optional(),
    studentAge4: nameSchema.optional(),
    studentAge5: nameSchema.optional(),
    studentAge6: nameSchema.optional(),
  })
  .partial()
  .superRefine((schema, ctx) => {
    const { studentsCount } = schema;
    const maxStudents = studentsCount || 0;

    for (let i = 1; i <= maxStudents; i++) {
      // @ts-expect-error Dynamic field name construction
      const studentName = schema[`studentName${i}`]?.trim() || '';
      if (!studentName || studentName.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: [`studentName${i}`],
        });
      }

      // @ts-expect-error Dynamic field name construction
      const studentAge = schema[`studentAge${i}`]?.trim() || '';
      if (!studentAge || studentAge.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: [`studentAge${i}`],
        });
      }
    }
  });

export const step2Schema = z.intersection(step2SchemaPlain, step2SchemaStudents);

export const step3SchemaPlain = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  phone: z
    .string({
      required_error: ERROR_MESSAGES.required,
      invalid_type_error: ERROR_MESSAGES.required,
    })
    .min(1, ERROR_MESSAGES.required)
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/g, ERROR_MESSAGES.invalidPhone),
});

const step3SchemaParentGuardians = z
  .object({
    studentsCount: z.number(),

    isCustomerAParentGuardianOfAll: z.boolean(),

    parentGuardianName1: nameSchema.optional(),
    parentGuardianName2: nameSchema.optional(),
    parentGuardianName3: nameSchema.optional(),
    parentGuardianName4: nameSchema.optional(),
    parentGuardianName5: nameSchema.optional(),
    parentGuardianName6: nameSchema.optional(),

    parentGuardianEmail1: emailSchema.optional(),
    parentGuardianEmail2: emailSchema.optional(),
    parentGuardianEmail3: emailSchema.optional(),
    parentGuardianEmail4: emailSchema.optional(),
    parentGuardianEmail5: emailSchema.optional(),
    parentGuardianEmail6: emailSchema.optional(),
  })
  .partial()
  .superRefine((schema, ctx) => {
    const { studentsCount, isCustomerAParentGuardianOfAll } = schema;

    if (isCustomerAParentGuardianOfAll) {
      return;
    }

    const currentStudentsCount = studentsCount ?? 0;

    for (let i = 1; i <= currentStudentsCount; i++) {
      // @ts-expect-error Dynamic field name construction
      const parentGuardianName = schema[`parentGuardianName${i}`]?.trim() || '';
      if (!parentGuardianName || parentGuardianName.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: [`parentGuardianName${i}`],
        });
      }

      // @ts-expect-error Dynamic field name construction
      const parentGuardianEmail = schema[`parentGuardianEmail${i}`]?.trim() || '';
      if (!parentGuardianEmail || parentGuardianEmail.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: [`parentGuardianEmail${i}`],
        });
      }
    }
  });

export const step3Schema = z.intersection(step3SchemaPlain, step3SchemaParentGuardians);

export const step4_1Schema = z.object({
  lessonType: z.string().min(1, ERROR_MESSAGES.required),
});

export const step4_2Schema = z
  .object({
    lessonTime: z.number().min(1, ERROR_MESSAGES.required),
    packageSize: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.lessonTime) {
      if (!data.packageSize) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['packageSize'],
          message: ERROR_MESSAGES.required,
        });
      }
    }
  });

export const step5Schema = z
  .object({
    lessonFrequency: z.number().min(1, ERROR_MESSAGES.required),
    customerWouldLikeToBegin: z.string().optional(),
    preferredLessonBeginDate: z.string().optional(),
    selectedDays: z.string().optional(),
    selectedWeekdayTimes: z.string().optional(),
    selectedWeekendTimes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.lessonFrequency) {
      if (!data.customerWouldLikeToBegin) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['customerWouldLikeToBegin'],
          message: ERROR_MESSAGES.required,
        });
      }
    }

    if (data.customerWouldLikeToBegin) {
      if (data.customerWouldLikeToBegin === WhenToBeginEnum.Specific && !data.preferredLessonBeginDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['preferredLessonBeginDate'],
          message: ERROR_MESSAGES.required,
        });
      }

      if (!data.selectedDays) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['selectedDays'],
          message: ERROR_MESSAGES.required,
        });
      }
    }

    if (data.selectedDays) {
      const minDays = data.lessonFrequency;
      const daysArray = data.selectedDays.split(' ') as DaysEnum[];
      const hasWeekdays = daysArray.some((day) => WEEKDAYS_ARRAY.includes(day));
      const hasWeekendDays = daysArray.some((day) => WEEKENDS_ARRAY.includes(day));

      if (daysArray.length < minDays) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['selectedDays'],
          message: ERROR_MESSAGES.required,
        });
      }

      if (hasWeekdays && !data.selectedWeekdayTimes) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['selectedWeekdayTimes'],
          message: ERROR_MESSAGES.required,
        });
      }

      if (hasWeekendDays && !data.selectedWeekendTimes) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['selectedWeekendTimes'],
          message: ERROR_MESSAGES.required,
        });
      }
    }
  });

export const step6Schema = z
  .object({
    customerHasAccessToPool: z.boolean().optional(),
    poolAddress: nameSchema.regex(/(?<!\d)\d{5}$/g, 'Invalid address').optional(),
    poolType: nameSchema.optional(),
    maxTravelDistance: nameSchema.optional(),
  })
  .superRefine((data, ctx) => {
    if (data.customerHasAccessToPool === true) {
      if (!data.poolAddress) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: ['poolAddress'],
        });
      }
      if (!data.poolType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: ['poolType'],
        });
      }
    } else {
      if (!data.maxTravelDistance) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.required,
          path: ['maxTravelDistance'],
        });
      }
    }
  });

export const step7Schema = z
  .object({
    policiesAgreement: z.literal(true, { 'message': ERROR_MESSAGES.check }),
  });


export const registrationSchemas: Record<number, z.ZodType> = {
  [RegistrationStepEnum.Step1]: step1Schema,
  [RegistrationStepEnum.Step2]: step2Schema,
  [RegistrationStepEnum.Step3]: step3Schema,
  [RegistrationStepEnum.Step4_1]: step4_1Schema,
  [RegistrationStepEnum.Step4_2]: step4_2Schema,
  [RegistrationStepEnum.Step5]: step5Schema,
  [RegistrationStepEnum.Step6]: step6Schema,
  [RegistrationStepEnum.Step7]: step7Schema,
};
