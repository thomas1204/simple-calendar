import React from 'react'

interface Date_Props {
  date: Number | null
}

function Date(props: Date_Props) {
  if (props.date) {
    return <div className='date col'>{props.date}</div>
  }
  return <div className='empty col' />
}

export default Date
