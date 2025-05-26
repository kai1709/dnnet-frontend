'use client'
import Cookies from 'js-cookie'
import { Globe, Search, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { ConfigProvider, Switch } from 'antd'

const themes = ['', 'dark', 'light-1', 'light-2']
const Header = () => {
  const [activeClass, setActiveClass] = useState(false)
  const [theme, setTheme] = useState(Cookies.get('THEME_LAYOUT') || '')
  const scrollCheck = () => {
    setActiveClass(window.scrollY !== 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck)

    return () => {
      window.removeEventListener('scroll', scrollCheck)
    }
  }, [])

  const HeaderContext = () => (
    <>
      <div className='flex'>
        <Link href='/' prefetch>
          <img src='/logo-1.png' className='hidden w-[220px] md:block' />
          <img src='/logo-mobile.png' className='block md:hidden' />
        </Link>
      </div>
      <div className='flex-1 px-4 items-center justify-center'>
        <div className='flex bg-gray-bg rounded max-w-[400px] items-center px-3 py-2 m-auto'>
          <Search />
          <Input className='rounded bg-gray-bg max-w-[400px] border-[0px] input-search' placeholder='Tìm kiếm' />
        </div>
      </div>
      <div className='pr-8 cursor-pointer'><Globe /></div>
      <div className='flex cursor-pointer text-head-line'>
        <User />
        <div className='ml-2'>
          Đăng ký / Đăng Nhập
        </div>
      </div>
      <div className='pl-4'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#C1272D'
            },
            components: {
              Switch: {
              },
            },
          }}
        >
          <Switch defaultChecked={theme === ''} onClick={() => {
            onSelectTheme(theme === 'dark' ? '' : 'dark')
          }} />
        </ConfigProvider>
      </div>
    </>
  )

  const onSelectTheme = (key: string) => {
    if (themes.indexOf(key) === -1) return
    setTheme(key)
    toggleTheme(key)
  }

  const toggleTheme = (value: string) => {
    Cookies.set('THEME_LAYOUT', value, { expires: 365 * 10 })
    document.documentElement.className = value
  }

  return (
    <>
      <div
        className={`flex w-full max-w-[1280px] items-center border-b-[1px] border-b-gray-bg bg-main-background px-6 py-4`}
        style={activeClass ? { position: 'fixed', zIndex: 999 } : { display: 'none' }}
      >
        <HeaderContext />
      </div>
      <div className={`flex items-center border-b-[1px] border-b-gray-bg px-6 py-4`}>
        <HeaderContext />
      </div>
    </>
  )
}

export default Header
