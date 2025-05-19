import { RegistrationForm } from '@/entities/registration-form.entity';

export type OnFieldChangedHandlerFunction = (fieldValue: unknown) => void;
export type BuildOnFieldChangedHandlerFunction = (fieldName: keyof RegistrationForm) => OnFieldChangedHandlerFunction;

export type OnFieldChangedEventHandlerProps = React.ChangeEvent<HTMLInputElement>;
export type OnFieldChangedEventHandlerFunction = (e: OnFieldChangedEventHandlerProps) => void;
export type BuildOnFieldChangedEventHandler = (fieldName: keyof RegistrationForm) => OnFieldChangedEventHandlerFunction;

export type OnFieldChangedEventHandlerProps2 = React.ChangeEvent<HTMLTextAreaElement>;
export type OnFieldChangedEventHandlerFunction2 = (e: OnFieldChangedEventHandlerProps2) => void;
export type BuildOnFieldChangedEventHandler2 = (fieldName: keyof RegistrationForm) => OnFieldChangedEventHandlerFunction2;

export type OnFieldFocusLostHandlerFunction = () => void;
export type BuildOnFieldFocusLostHandlerFunction = (fieldName: keyof RegistrationForm) => OnFieldFocusLostHandlerFunction;
