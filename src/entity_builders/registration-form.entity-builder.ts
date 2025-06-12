import { CustomerRegistration } from '@/__generated__/prisma';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

export class RegistrationFormEntityBuilder {
  build(plainEntity: CustomerRegistration): RegistrationForm {
    return convertPrismaTypesToNumber(plainEntity);
  }
}
