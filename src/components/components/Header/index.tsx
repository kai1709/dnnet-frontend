'use client'
import Cookies from 'js-cookie'
import { CircleUser, Globe, Search, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { ConfigProvider, Dropdown, MenuProps, Switch } from 'antd'
import IconHome from '../icons/IconHome'
import { decrypt } from '@/components/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import IconLogout from '../icons/IconLogout'

export type User = {
  display_name: string
  full_name: string
  job_title: string
  avatar: string
  email: string
  profile_url: string
  mobile_number: string
  country: string
  gender: string
}
const themes = ['', 'dark', 'light-1', 'light-2']
const Header = () => {
  const path = usePathname()
  const router = useRouter()
  const [userData, setUserData] = useState<User | null>(null)
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

  const loadUser = async () => {
    const cookie = Cookies.get('user')
    const session = await decrypt(cookie)
    if (session) {
      const userData = JSON.parse(session)
      setUserData(userData)
    }
  }

  const handleLogout = () => {
    Cookies.remove('user')
    setUserData(null)
    if (path.includes('profile')) {
      router.push('/')
    }
  }
  useEffect(() => {
    loadUser()
  }, [path])

  const userMenu: MenuProps['items'] = [
    {
      key: '0',
      label: <div className='flex'>
        <img src={userData?.avatar || '/user-avatar-1.png'} className='w-[30px] h-[30px] mr-2' style={{ borderRadius: 45 }} />
        <div className='text-text-primary font-semibold text-[16px]'>{userData?.display_name}</div>
      </div>
    },
    {
      key: '1',
      label: <Link href="/profile"><div className='py-2 text-[14px]'>Trang cá nhân</div></Link>
    },
    {
      key: '2',
      label: (
        <div className='flex gap-2 items-center text-[14px] py-2' onClick={() => handleLogout()}>
          Thoát
          <IconLogout />
        </div>
      )
    }
  ]

  const langMenus: MenuProps['items'] = [
    {
      key: '1',
      label: <div>Tiếng Việt</div>
    },
    {
      key: '2',
      label: <div>Tiếng Anh</div>
    }
  ]
  const HeaderContext = () => (
    <>
      <div className='flex items-center'>
        <Link href='/' prefetch>
          <img src='/logo-1.png' className='hidden w-[220px] md:block' />
          <img src='/logo-mobile.png' className='block md:hidden' />
        </Link>
      </div>
      <div className='flex-1 items-center justify-center px-4'>
        <div className='m-auto hidden max-w-[400px] items-center rounded bg-gray-bg px-3 py-2 md:flex'>
          <Search />
          <Input className='input-search max-w-[400px] rounded border-[0px] bg-gray-bg' placeholder='Tìm kiếm' />
        </div>
      </div>
      <Dropdown menu={{ items: langMenus }} trigger={['hover', 'click']} placement='bottom'>
        <div className='cursor-pointer pr-8'>
          <Globe className='text-text-primary' />
        </div>
      </Dropdown>
      {userData ? (
        <Dropdown overlayClassName='user-dropdown' menu={{ items: userMenu }} trigger={['hover', 'click']} placement='bottom'>
          <div className='flex cursor-pointer items-center'>
            <img src={userData?.avatar || '/user-avatar-1.png'} className='w-[30px] h-[30px] mr-2' style={{ borderRadius: 45 }} />
            <div className='text-text-primary'>{userData.display_name}</div>
          </div>
        </Dropdown>
      ) : (
        <Link href={'/login'}>
          <div className='flex cursor-pointer'>
            <div className='ml-2 block hidden text-text-primary md:block'>Đăng ký / Đăng Nhập</div>
          </div>
        </Link>
      )}
      <div className='pl-4'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#C1272D'
            },
            components: {
              Switch: {}
            }
          }}
        >
          <Switch
            defaultChecked={theme === ''}
            onClick={() => {
              onSelectTheme(theme === 'dark' ? '' : 'dark')
            }}
          />
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

  const SubMenu = () => (
    <div className='border-b-border-color hidden items-center gap-8 border-b-[1px] p-4 md:flex'>
      <div className='flex cursor-pointer items-center'>
        <IconHome className='icon-home' />
        <h1 className='ml-2 text-text-primary'>Trang chủ</h1>
      </div>
      <div className='flex cursor-pointer items-center'>
        <h1 className='text-text-primary'>Tin Tức</h1>
      </div>
      <div className='flex cursor-pointer items-center'>
        <h1 className='text-text-primary'>Kinh Doanh</h1>
      </div>
      <div className='flex cursor-pointer items-center'>
        <h1 className='text-text-primary'>Chuyên Mục</h1>
      </div>
      <div className='flex cursor-pointer items-center'>
        <h1 className='text-text-primary'>Cộng Đồng</h1>
      </div>
    </div>
  )

  return (
    <>
      <div
        className={`border-b-border-color w-full max-w-[1280px] items-center bg-main-background`}
        style={activeClass ? { position: 'fixed', zIndex: 999 } : { display: 'none' }}
      >
        <div className='flex items-center border-b-[1px] px-6 py-4'>
          <HeaderContext />
        </div>
        <SubMenu />
      </div>
      <div className={`border-b-border-color items-center`}>
        <div className='flex items-center border-b-[1px] px-6 py-4'>
          <HeaderContext />
        </div>
        <SubMenu />
      </div>
    </>
  )
}

export default Header
