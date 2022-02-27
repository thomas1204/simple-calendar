import React from 'react'
import { Moment } from 'moment'

interface Date_Props {
  date: Number | null
  currentDate: Moment
  selectedDate: Moment
}

function Date(props: Date_Props) {
  if (props.date) {
    return <div className='date col'>{props.date}</div>
  }
  return <div className='empty col' />
}

export default Date
