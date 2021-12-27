import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './calendar.css'
import { initializeIcons } from '@fluentui/font-icons-mdl2'
import { DateTime } from 'luxon'

// Components
import Header from './header'
import Month from './month'

initializeIcons()

function Calendar() {
  const [date, setDate] = useState(DateTime.now())
  const [month, setMonth] = useState(DateTime.now())
  const [year, setYear] = useState(DateTime.now())

  console.log('date', date)
  console.log('month', month)
  console.log('year', year)
  return (
    <div className='container-lg h-100'>
      <div className='calendar'>
        <Header date={date} month={month} year={year} />
        <Month />
      </div>
    </div>
  )
}

export default Calendar
