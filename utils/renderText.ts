export const renderText = (text: string, unit: string | null = null): string => {
  if (!unit) return text ? text : '-';

  return text ? `${text} ${unit}` : '-';
};
