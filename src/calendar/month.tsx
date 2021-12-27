import React from 'react'
import Date from './date'

function Month() {
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-lg-8 col-md-9 col-sm-12 col-xs-12'>
        <div className='month'>
          <Header />
          <div className='weeks'>
            <div className='week row'>
              <Date date={null} />
              <Date date={null} />
              <Date date={null} />
              <Date date={1} />
              <Date date={2} />
              <Date date={3} />
              <Date date={4} />
            </div>

            <div className='week row'>
              <Date date={1} />
              <Date date={2} />
              <Date date={3} />
              <Date date={1} />
              <Date date={2} />
              <Date date={3} />
              <Date date={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className='month-header row'>
      <div className='day col text-center'>Mon</div>
      <div className='day col text-center'>Tue</div>
      <div className='day col text-center'>Wed</div>
      <div className='day col text-center'>Thur</div>
      <div className='day col text-center'>Fri</div>
      <div className='day col text-center'>Sat</div>
      <div className='day col text-center'>Sun</div>
    </div>
  )
}

export default Month
