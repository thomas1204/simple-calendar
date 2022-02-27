import React, { useEffect } from 'react'
import moment, { Moment } from 'moment'
import { Dropdown } from 'bootstrap'

interface HeaderProps {
  selectedDate: Moment
  navigateBetweenMonths: (prev?: Boolean) => void
  goToToday: () => void
}

function Header(props: HeaderProps) {
  useEffect(() => {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdownElementList.map(dropdownToggleEl => {
      return new Dropdown(dropdownToggleEl)
    })
  })

  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-lg-8 col-md-9 col-sm-12 col-xs-12'>
        <div className='row'>
          <div className='col-4'>
            <button type='button' className='btn btn-primary' onClick={() => props.goToToday()}>
              <i className='bi bi-calendar-event' style={{ marginRight: 5 }} />
              Today
            </button>
          </div>
          <div className='col-4 text-center'>
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown button
              </button>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button type='button' className='btn btn-light mx-1'>
              {moment(props.selectedDate).format('MMMM')}
              <i className='bi bi-chevron-down' style={{ marginLeft: 5 }} />
            </button>
            <button type='button' className='btn btn-light mx-1'>
              {moment(props.selectedDate).format('YYYY')}
              <i className='bi bi-chevron-down' style={{ marginLeft: 5 }} />
            </button>
          </div>
          <div className='col-4 text-end'>
            <button type='button' className='btn btn-light mx-1' onClick={() => props.navigateBetweenMonths(true)}>
              <i className='bi bi-arrow-up' />
            </button>
            <button type='button' className='btn btn-light mx-1' onClick={() => props.navigateBetweenMonths()}>
              <i className='bi bi-arrow-down' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
