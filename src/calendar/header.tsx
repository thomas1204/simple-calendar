import React from 'react'
import { Moment } from 'moment'

interface HeaderProps {
  date: Moment
  setDate: (date: Moment) => void
}

function Header(props: HeaderProps) {
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-lg-8 col-md-9 col-sm-12 col-xs-12'>
        <div className='row'>
          <div className='col-4'>
            <button type='button' className='btn btn-primary'>
              <i className='bi bi-calendar-event' style={{ marginRight: 5 }} />
              Today
            </button>
          </div>
          <div className='col-4 text-center'>
            <button type='button' className='btn btn-light mx-1'>
              December
              <i className='bi bi-chevron-down' style={{ marginLeft: 5 }} />
            </button>
            <button type='button' className='btn btn-light mx-1'>
              2021
              <i className='bi bi-chevron-down' style={{ marginLeft: 5 }} />
            </button>
          </div>
          <div className='col-4 text-end'>
            <button type='button' className='btn btn-light mx-1'>
              <i className='bi bi-arrow-up' />
            </button>
            <button type='button' className='btn btn-light mx-1'>
              <i className='bi bi-arrow-down' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
