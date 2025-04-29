'use client'
import React from 'react'
import Cookies from 'js-cookie'

const ThemeSwitcher = () => {
  const toggleTheme = (value: string) => {
    Cookies.set('THEME_LAYOUT', value, { expires: 365 * 10 })
    document.documentElement.className = value
  }

  return (
    <div className='text flex cursor-pointer flex-col gap-4 md:flex-row'>
      <div className='' onClick={() => toggleTheme('')}>
        switch to light (:root)
      </div>
      <div className='' onClick={() => toggleTheme('dark')}>
        switch to dark
      </div>
      <div className='' onClick={() => toggleTheme('light-1')}>
        switch to light 1
      </div>
      <div className='' onClick={() => toggleTheme('light-2')}>
        switch to light 2
      </div>
    </div>
  )
}

export default ThemeSwitcher
