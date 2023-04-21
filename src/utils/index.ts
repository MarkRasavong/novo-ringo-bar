export function convertToTime(num: number): string {
  const timeStr = num.toFixed(2);
  const [hours, minutes] = timeStr.split('.');
  const paddedMinutes = minutes.padEnd(2, '0');
  return `${hours}:${paddedMinutes}`;
}
