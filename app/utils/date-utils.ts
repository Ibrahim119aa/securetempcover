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

export function getPrevNextValues(currentDate: Date, unit: "day" | "month" | "year") {
  let prevValue: string | number
  let nextValue: string | number
  let currentValue: string | number

  if (unit === "day") {
    prevValue = getRelativeDate(currentDate, "day", -1).getDate().toString().padStart(2, "0")
    currentValue = currentDate.getDate().toString().padStart(2, "0")
    nextValue = getRelativeDate(currentDate, "day", 1).getDate().toString().padStart(2, "0")
  } else if (unit === "month") {
    prevValue = monthNames[getRelativeDate(currentDate, "month", -1).getMonth()]
    currentValue = monthNames[currentDate.getMonth()]
    nextValue = monthNames[getRelativeDate(currentDate, "month", 1).getMonth()]
  } else {
    // year
    prevValue = getRelativeDate(currentDate, "year", -1).getFullYear()
    currentValue = currentDate.getFullYear()
    nextValue = getRelativeDate(currentDate, "year", 1).getFullYear()
  }
  return { prevValue, currentValue, nextValue }
}
