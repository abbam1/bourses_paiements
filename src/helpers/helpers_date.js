export function formaterHoursAndDate(time) {
  return (
    new Date(time).toLocaleDateString() +
    " à " +
    new Date(time).toLocaleTimeString()
  );
}
