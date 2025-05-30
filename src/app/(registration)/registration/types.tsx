import { RegistrationForm } from '@/entities/registration-form.entity';

export type OnFieldFocusLostHandlerFunction = () => void;
export type BuildOnFieldFocusLostHandlerFunction = (fieldName: keyof RegistrationForm) => OnFieldFocusLostHandlerFunction;
