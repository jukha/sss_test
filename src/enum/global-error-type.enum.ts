export enum GlobalErrorType {
  Unknown = 'Unknown',
  RegistrationStepRequest = 'RegistrationStepRequest',
}

const globalErrorVersioningMapping: Record<GlobalErrorType, boolean> = {
  'Unknown': false,
  'RegistrationStepRequest': true,
}

export const globalErrorIsVersioning = (type: GlobalErrorType) => {
  return globalErrorVersioningMapping[type];
}
