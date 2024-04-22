export const calculatePercentage = (
  completed?: number,
  total?: number,
): string => {
  if (!completed || !total || total === 0) return "0%"; // Перевірка на випадок, коли загальна кількість завдань дорівнює нулю
  const percentage = (completed / total) * 100;
  return `${percentage.toFixed(2)}%`; // Форматуємо до двох знаків після коми
};
