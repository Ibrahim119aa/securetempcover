export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function formatDate(date: Date): string {
  const day = date.getDate()
  const month = date.getMonth() + 1  // getMonth() returns 0-11, so +1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}


// Helper to get a date relative to another date, handling day clamping
function getRelativeDate(baseDate: Date, unit: "day" | "month" | "year", offset: number): Date {
  const newDate = new Date(baseDate)
  if (unit === "day") {
    newDate.setDate(baseDate.getDate() + offset)
  } else if (unit === "month") {
    const originalDay = baseDate.getDate()
    newDate.setMonth(baseDate.getMonth() + offset)
    const maxDaysInNewMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
    newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
  } else if (unit === "year") {
    const originalDay = baseDate.getDate()
    const originalMonth = baseDate.getMonth()
    newDate.setFullYear(baseDate.getFullYear() + offset)
    const maxDaysInNewMonth = new Date(newDate.getFullYear(), originalMonth + 1, 0).getDate()
    newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
  }
  return newDate
}

export function getPrevNextValues(date: Date, unit: "day" | "month" | "year") {
  const prevDate = new Date(date);
  const nextDate = new Date(date);

  if (unit === "day") {
    prevDate.setDate(date.getDate() - 1);
    nextDate.setDate(date.getDate() + 1);
  } else if (unit === "month") {
    prevDate.setMonth(date.getMonth() - 1);
    nextDate.setMonth(date.getMonth() + 1);
  } else if (unit === "year") {
    prevDate.setFullYear(date.getFullYear() - 1);
    nextDate.setFullYear(date.getFullYear() + 1);
  }

  const formatter =
    unit === "month"
      ? new Intl.DateTimeFormat("en-US", { month: "short" })
      : new Intl.DateTimeFormat("en-US", { [unit]: "numeric" });

  return {
    prevValue: formatter.format(prevDate),
    currentValue: formatter.format(date),
    nextValue: formatter.format(nextDate),
  };
}

