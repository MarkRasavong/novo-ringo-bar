export function convertToTime(num: number): string {
  const timeStr = num.toFixed(2);
  const [hours, minutes] = timeStr.split('.');
  const paddedMinutes = minutes.padEnd(2, '0');
  return `${hours}:${paddedMinutes}`;
}

export function formatAsEuro(number: number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  return formatter.format(number);
}
