export const generateUrlLocationName = (name: string) => {
  return name.toLowerCase().replaceAll(' ', '-');
};

export const generateCityServiceUrl = (cityName: string, stateAbbr: string, service: string) => {
  return `/${generateUrlLocationName(cityName)}--${generateUrlLocationName(stateAbbr)}--${generateUrlLocationName(
    service
  )}`;
};
