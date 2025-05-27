export const convertDateToUSFormat = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
};

/**
 *
 * @param dateString in format `MM/DD/YYYY`
 * @returns
 */
export const convertDateFromUSFormatToInputValue = (dateString: string) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!dateRegex.test(dateString)) {
    return '';
  }

  const [month, day, year] = dateString.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};
