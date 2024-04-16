export const formatDateToYYYYMMDD = (date: Date): string => {
  const pad = (num: number) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // getMonth() returns 0-11
  const day = pad(date.getDate());

  return `${year}-${month}-${day}`;
};
