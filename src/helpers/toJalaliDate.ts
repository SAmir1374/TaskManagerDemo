export function toJalaliDate(
  date: Date,
  dateStyle?: "full" | "long" | "medium" | "short" | undefined
) {
  const dateObject = new Date(date);
  return new Intl.DateTimeFormat("fa-IR", {
    dateStyle,
  })
    .format(dateObject)
    .split(" ");
}
