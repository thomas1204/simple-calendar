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
  const [date, setDate] = useState(moment())
  return (
    <div className='container-lg h-100'>
      <div className='calendar'>
        <Header date={date} setDate={setDate} />
        <Month date={date} />
      </div>
    </div>
  )
}

export default Calendar
