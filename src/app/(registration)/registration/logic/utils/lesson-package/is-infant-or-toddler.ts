import { AgeInfantsEnum, AgePreschoolersEnum, AgeToddlersEnum } from '@/enum/student-ages.enum';

export const isInfantOrToddlerAge = (age: string): age is AgeInfantsEnum | AgeToddlersEnum => {
  return [...Object.values(AgeInfantsEnum), ...Object.values(AgeToddlersEnum), AgePreschoolersEnum['3 Years']].includes(
    age as AgeInfantsEnum | AgeToddlersEnum
  );
};
