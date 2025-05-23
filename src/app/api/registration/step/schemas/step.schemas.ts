// import { Step3Fields } from '@/entities/registration-form.entity';
import { z } from 'zod';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';


// const FIELD_LABELS = {
//   zip: 'ZIP',
//   customerHasAccessToPool: 'do you have access to pool or not',
//
//   studentsCount: 'how many students need swim lessons',
//   isCustomerAParentGuardianOfAll: 'are you a parent/guardian of all the students or not',
//   studentName1: 'student 1 name',
//   studentName2: 'student 2 name',
//   studentName3: 'student 3 name',
//   studentName4: 'student 4 name',
//   studentName5: 'student 5 name',
//   studentName6: 'student 6 name',
//   studentAge1: 'student 1 age',
//   studentAge2: 'student 2 age',
//   studentAge3: 'student 3 age',
//   studentAge4: 'student 4 age',
//   studentAge5: 'student 5 age',
//   studentAge6: 'student 6 age',
//
//   firstName: 'first name',
//   lastName: 'last name',
//   email: 'email',
//   phone: 'phone',
//   parentGuardianName1: 'student 1 parent/guardian name',
//   parentGuardianName2: 'student 2 parent/guardian name',
//   parentGuardianName3: 'student 3 parent/guardian name',
//   parentGuardianName4: 'student 4 parent/guardian name',
//   parentGuardianName5: 'student 5 parent/guardian name',
//   parentGuardianName6: 'student 6 parent/guardian name',
//   parentGuardianEmail1: 'student 1 parent/guardian email',
//   parentGuardianEmail2: 'student 2 parent/guardian email',
//   parentGuardianEmail3: 'student 3 parent/guardian email',
//   parentGuardianEmail4: 'student 4 parent/guardian email',
//   parentGuardianEmail5: 'student 5 parent/guardian email',
//   parentGuardianEmail6: 'student 6 parent/guardian email',
//
//   poolAddress: string | null;
//   poolType?: string | null;
//
//   policiesAgreement?: boolean;
// };




const ERROR_MESSAGES = {
  required: 'Required',
  invalidZip: 'Must be exactly 5 digits', //'Invalid ZIP'
  invalidEmail: 'Invalid email',
  invalidPhone: 'Invalid phone',
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

const step2SchemaStudents = z.object({
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
  studentAge6: nameSchema.optional()
})
.partial()
.superRefine((schema, ctx) => {
  const { studentsCount } = schema;
  const maxStudents = studentsCount || 6;

  for (let i = 1; i <= maxStudents; i++) {
    // @ts-expect-error Dynamic field name construction
    const studentName = schema[`studentName${i}`]?.trim() || '';
    if (!studentName || studentName.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.required,
        path: [`studentName${i}`]
      });
    }

    // @ts-expect-error Dynamic field name construction
    const studentAge = schema[`studentAge${i}`]?.trim() || '';
    if (!studentAge || studentAge.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.required,
        path: [`studentAge${i}`]
      });
    }
  }
});

export const step2Schema = z.intersection(
  step2SchemaPlain,
  step2SchemaStudents
);


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

const step3SchemaParentGuardians = z.object({
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

  const maxStudents = studentsCount || 6;

  for (let i = 1; i <= maxStudents; i++) {
    // @ts-expect-error Dynamic field name construction
    const parentGuardianName = schema[`parentGuardianName${i}`]?.trim() || '';
    if (!parentGuardianName || parentGuardianName.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.required,
        path: [`parentGuardianName${i}`]
      });
    }

    // @ts-expect-error Dynamic field name construction
    const parentGuardianEmail = schema[`parentGuardianEmail${i}`]?.trim() || '';
    if (!parentGuardianEmail || parentGuardianEmail.length < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.required,
        path: [`parentGuardianEmail${i}`]
      });
    }
  }
});

export const step3Schema = z.intersection(
  step3SchemaPlain,
  step3SchemaParentGuardians
);


export const step6Schema = z.object({
  poolAddress: nameSchema.regex(/\d{5}$/gi, 'Invalid address'),
  poolType: nameSchema,
});


export const registrationSchemas: Record<number, z.ZodType> = {
  [RegistrationStepEnum.Step1]: step1Schema,
  [RegistrationStepEnum.Step2]: step2Schema,
  [RegistrationStepEnum.Step3]: step3Schema,
  [RegistrationStepEnum.Step6]: step6Schema,
};
