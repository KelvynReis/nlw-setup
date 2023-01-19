import dayjs from "dayjs";

export const generateDatesFromYearBeginning = () => {
  const firstDayoftheYear = dayjs().startOf("year");

  const today = new Date();

  const dates = [];

  let compareDate = firstDayoftheYear;
  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
};
