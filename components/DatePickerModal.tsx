"use client"
import Image from "next/image"
import * as React from "react"
import { useState,useEffect } from "react"
import { Info, ChevronUp, ChevronDown } from "lucide-react"

import { getPrevNextValues } from "../app/utils/date-utils"

interface DatePickerModalProps {
  initialDate: Date
  onSelect: (date: Date) => void
  onCancel: () => void
}

export function DatePickerModal({ initialDate, onSelect, onCancel }: DatePickerModalProps) {
  const [currentDate, setCurrentDate] = React.useState(initialDate)

  const handleIncrement = (unit: "day" | "month" | "year") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      if (unit === "day") {
        newDate.setDate(prevDate.getDate() + 1)
      } else if (unit === "month") {
        const originalDay = prevDate.getDate()
        newDate.setMonth(prevDate.getMonth() + 1)
        const maxDaysInNewMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
        newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
      } else if (unit === "year") {
        const originalDay = prevDate.getDate()
        const originalMonth = prevDate.getMonth()
        newDate.setFullYear(prevDate.getFullYear() + 1)
        const maxDaysInNewMonth = new Date(newDate.getFullYear(), originalMonth + 1, 0).getDate()
        newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
      }
      return newDate
    })
  }

  const handleDecrement = (unit: "day" | "month" | "year") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      if (unit === "day") {
        newDate.setDate(prevDate.getDate() - 1)
      } else if (unit === "month") {
        const originalDay = prevDate.getDate()
        newDate.setMonth(prevDate.getMonth() - 1)
        const maxDaysInNewMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
        newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
      } else if (unit === "year") {
        const originalDay = prevDate.getDate()
        const originalMonth = prevDate.getMonth()
        newDate.setFullYear(prevDate.getFullYear() - 1)
        const maxDaysInNewMonth = new Date(newDate.getFullYear(), originalMonth + 1, 0).getDate()
        newDate.setDate(Math.min(originalDay, maxDaysInNewMonth))
      }
      return newDate
    })
  }

  const { prevValue: prevDay, currentValue: currentDay, nextValue: nextDay } = getPrevNextValues(currentDate, "day")
  const {
    prevValue: prevMonth,
    currentValue: currentMonth,
    nextValue: nextMonth,
  } = getPrevNextValues(currentDate, "month")
  const { prevValue: prevYear, currentValue: currentYear, nextValue: nextYear } = getPrevNextValues(currentDate, "year")
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsOpen(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/55 h-screen transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div
        className={`bg-[#F2F2F2] p-0 shadow-lg w-80 max-w-sm transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100 ' : 'scale-90 opacity-0'
          }`}
      >
        <div className="flex justify-between  p-2">
          <div className="justify-start">
            <Image src="/icon.png" alt="" width={12} height={10} className="w-8 h-8 justify-start">
            </Image>
          </div>
          <div className="justify-center">
            <h2 className="text-[#333] font-bold  uppercase tracking-wide">Date of Birth</h2>

          </div>
          <div className="justify-end"></div>
        </div>
        <div className="grid grid-cols-3 text-center">
          {/* Headers */}
          <div className="text-xs font-semibold uppercase text-[#333] mb-2">Day</div>
          <div className="text-xs font-semibold uppercase text-[#333] mb-2">Month</div>
          <div className="text-xs font-semibold uppercase text-[#333] mb-2">Year</div>

          {/* Up Arrows */}
          <button
            className="flex justify-center items-center py-1 text-[#333] hover:text-gray-900"
            onClick={() => handleIncrement("day")}
            aria-label="Increment day"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            className="flex justify-center items-center py-1 text-[#333] hover:text-gray-900"
            onClick={() => handleIncrement("month")}
            aria-label="Increment month"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            className="flex justify-center items-center py-1 text-[#333] hover:text-[#333]"
            onClick={() => handleIncrement("year")}
            aria-label="Increment year"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          {/* Values */}
          <div className="py-1 text-gray-500">{prevDay}</div>
          <div className="py-1 text-gray-500">{prevMonth}</div>
          <div className="py-1 text-gray-500">{prevYear}</div>

          <div className="py-1 bg-gray-200 font-semibold">{currentDay}</div>
          <div className="py-1 bg-gray-200 font-semibold">{currentMonth}</div>
          <div className="py-1 bg-gray-200 font-semibold">{currentYear}</div>

          <div className="py-1 text-gray-500">{nextDay}</div>
          <div className="py-1 text-gray-500">{nextMonth}</div>
          <div className="py-1 text-gray-500">{nextYear}</div>

          {/* Down Arrows */}
          <button
            className="flex justify-center items-center py-1 text-gray-600 hover:text-gray-900"
            onClick={() => handleDecrement("day")}
            aria-label="Decrement day"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
          <button
            className="flex justify-center items-center py-1 text-gray-600 hover:text-gray-900"
            onClick={() => handleDecrement("month")}
            aria-label="Decrement month"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
          <button
            className="flex justify-center items-center py-1 text-gray-600 hover:text-gray-900"
            onClick={() => handleDecrement("year")}
            aria-label="Decrement year"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        <div className="flex  p-4 w-full space-x-2">
          <button
            className="mbsc-fr-btn px-4 py-1"
            onClick={onCancel}
          >
            CANCEL
          </button>
          <button
            className="mbsc-fr-btn px-4 py-1"
            onClick={() => { onSelect(currentDate); onCancel(); }}
          >
            DONE
          </button>
        </div>
      </div >
    </div >
  )
}
