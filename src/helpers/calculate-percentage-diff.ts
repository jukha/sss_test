export const calculatePercentageDiff = (val1: number, val2: number) => {
  if (val1 === 0 && val2 === 0) return 0;

  const difference = Math.abs(val1 - val2);
  const average = Math.abs((val1 + val2) / 2);

  return +((difference / average) * 100).toFixed(1);
};
