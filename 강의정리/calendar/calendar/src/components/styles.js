function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}
export function beforeMonth(day, value) {
  return day.isBefore(value.clone().startOf("month"), "day");
}

export function afterMonth(day, value) {
  return day.isAfter(value.clone().endOf("month"), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function isEvent(day, events) {
  for (const iterator of events) {
    if (day.format("YY-MM-DD") === iterator.excerciseDay) {
      return iterator;
    }
  }
}

function dayStyles(day, value, events) {
  const event = isEvent(day, events);
  if (event) {
    return {
      style: "events",
      type: event.excerciseCategory,
    };
  }
  if (isToday(day)) {
    return { style: "today" };
  }
  if (beforeMonth(day, value)) return { style: "before" };
  if (afterMonth(day, value)) return { style: "before" };
  if (isSelected(day, value)) return { style: "selected" };
  return "";
}

export default dayStyles;
