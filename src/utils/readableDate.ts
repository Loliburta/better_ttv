export const readableDate = (date: Date): string => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDay();
  return `Joined ${day === 0 ? 1 : day} ${month} ${year}`;
};
