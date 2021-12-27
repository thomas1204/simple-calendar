import React from 'react'
import { default as DateComponent } from './date'
import moment, { Moment } from 'moment'

interface MonthProps {
  date: Moment
}

function Month(props: MonthProps) {
  const date = props.date
  const weeks = getWeeksInMonth(date)
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
                {week!.map((day, dayIndex) => (
                  <DateComponent date={day} key={dayIndex} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  function getWeeksInMonth(date: Moment) {
    const year = moment(date).year()
    const month = moment(date).month() + 1
    // @ts-ignore
    return Array(new Date(year, month, 0).getDate())
      .fill(0) // @ts-ignore
      .map((_, i) => new Date(year, month - 1, i + 1))
      .map((d, i, a) =>
        !i && d.getDay()
          ? [Array(d.getDay()).fill(null), d.getDate()]
          : d.getDate() === a.length && d.getDay() < 6
          ? [d.getDate(), Array(6 - d.getDay()).fill(null)]
          : d.getDate()
      )
      .flat(2)
      .map((d, i, a) => (a.length ? a.splice(0, 7) : null))
      .filter(w => w)
  }
}

export default Month
