import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './calendar.css'
import { initializeIcons } from '@fluentui/font-icons-mdl2'
import moment from 'moment'

// Components
import Header from './header'
import Month from './month'

initializeIcons()

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(moment())
  const currentDate = moment()
  return (
    <div className='container-lg h-100'>
      <div className='calendar'>
        <Header selectedDate={selectedDate} navigateBetweenMonths={navigateBetweenMonths} goToToday={goToToday} />
        <Month selectedDate={selectedDate} currentDate={currentDate} />
      </div>
    </div>
  )

  function navigateBetweenMonths(prev: Boolean = false) {
    let currentDate = moment(selectedDate).add(1, 'months')
    if (prev) {
      currentDate = moment(selectedDate).subtract(1, 'months')
    }
    setSelectedDate(currentDate)
  }

  function goToToday() {
    setSelectedDate(moment())
  }
}

export default Calendar
