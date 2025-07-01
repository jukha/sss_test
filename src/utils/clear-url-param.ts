export const cleanUrlParam = (param: string | null): string => {
  if (!param) return '';

  return decodeURIComponent(param).replace(/\s+/g, '-');
};
