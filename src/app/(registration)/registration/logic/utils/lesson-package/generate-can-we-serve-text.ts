type GenerateCanWeServeTextParams = {
  isRegistrationComplete?: boolean | null;
  customerHasAccessToPool?: boolean | null;
  serviceAvailable?: boolean | null;
  doWeHaveSIWithPool?: boolean | null;
};

export const generateCanWeServeText = ({
  isRegistrationComplete,
  customerHasAccessToPool,
  serviceAvailable,
  doWeHaveSIWithPool,
}: GenerateCanWeServeTextParams) => {
  const regType = isRegistrationComplete ? 'REGISTRATION COMPLETE' : 'INCOMPLETE REG';
  const canWeServe = serviceAvailable && (customerHasAccessToPool || doWeHaveSIWithPool);
  const leadType = canWeServe ? 'Good Lead' : 'Bad lead';
  const poolType = customerHasAccessToPool ? 'Has pool' : 'no pool';

  let cannotServeType = '';

  if (!serviceAvailable) {
    cannotServeType = 'outside of service area';
  } else if (!customerHasAccessToPool && !doWeHaveSIWithPool) {
    cannotServeType = 'No SI with pool';
  }

  return [regType, leadType, poolType, cannotServeType].join(', ');
};
