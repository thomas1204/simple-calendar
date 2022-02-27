import React from 'react'
import { default as DateComponent } from './date'
import moment, { Moment } from 'moment'

interface MonthProps {
  selectedDate: Moment
  currentDate: Moment
}

function Month(props: MonthProps) {
  const selectedDate = props.selectedDate
  const weeks = getWeeksInMonth(selectedDate)
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-lg-8 col-md-9 col-sm-12 col-xs-12'>
        <div className='month'>
          <div className='days row'>
            <div className='day col text-center'>Sun</div>
            <div className='day col text-center'>Mon</div>
            <div className='day col text-center'>Tue</div>
            <div className='day col text-center'>Wed</div>
            <div className='day col text-center'>Thur</div>
            <div className='day col text-center'>Fri</div>
            <div className='day col text-center'>Sat</div>
          </div>
          <div className='weeks'>
            {weeks.map((week, weekIndex) => (
              <div className='week row' key={weekIndex}>
                {week!.map((date, dayIndex) => (
                  <DateComponent date={date} key={dayIndex} currentDate={props.currentDate} selectedDate={props.selectedDate} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  function getWeeksInMonth(date: Moment) {
    const totalDays = moment(date).daysInMonth()
    const firstDayOfMonth = moment(date).startOf('month').day()
    let days = new Array(firstDayOfMonth).fill(null)
    for (let i = 1; i <= totalDays; i++) {
      days.push(i)
    }
    const lastDayOfMonth = moment(date).endOf('month').day()
    for (let i = lastDayOfMonth + 1; i <= 6; i++) {
      days.push(null)
    }
    let weeks = []
    while (days.length) {
      weeks.push(days.splice(0, 7))
    }
    return weeks
  }
}

export default Month
