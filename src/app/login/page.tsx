'use client'
import IconFacebook from '@/components/components/icons/IconFacebook'
import IconGoogle from '@/components/components/icons/IconGoogle'
import { Input, Tabs, TabsProps } from 'antd'
import { fetcherAPI } from '@/services/fetcher'
import { endPoints, socialCodeEndpoint, socialLoginEndpoints } from '@/services/endpoints'
import { useEffect, useState } from 'react'
import { encrypt, queryParamsToObject } from '@/components/lib/utils'
import { useRouter } from 'next/navigation'
import IconMicrosoft from '@/components/components/icons/IconMicrosoft'
import Loading from '@/components/components/icons/Loading'
import Cookies from 'js-cookie'

const LoginForm = () => {
  return (
    <div className='pt-[24px]'>
      <div>
        <Input
          placeholder='Nhập Email'
          className='selected:bg-gray-bg mb-[12px] border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg focus:bg-gray-bg focus-visible:bg-gray-bg'
        />
      </div>
      <div>
        <Input
          placeholder='Nhập mật khẩu'
          className='border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg'
          type='password'
        />
      </div>
      <div className='mt-3 flex items-end justify-end'>
        <div className='cursor-pointer text-red-primary'>Quên mật khẩu?</div>
      </div>
    </div>
  )
}

const RegForm = () => {
  return (
    <div className='pt-[24px]'>
      <div>
        <Input
          placeholder='Nhập Email'
          className='selected:bg-gray-bg mb-[12px] border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg focus:bg-gray-bg focus-visible:bg-gray-bg'
        />
      </div>

      <div>
        <Input
          placeholder='Tên hiển thị'
          className='selected:bg-gray-bg mb-[12px] border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg focus:bg-gray-bg focus-visible:bg-gray-bg'
        />
      </div>
      <div>
        <Input
          placeholder='Nhập mật khẩu'
          className='mb-[12px] border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg'
          type='password'
        />
      </div>
      <div>
        <Input
          placeholder='Xác nhận mật khẩu'
          className='border-[0px] bg-gray-bg p-[12px] hover:bg-gray-bg'
          type='password'
        />
      </div>
      <div className='mt-3 flex items-end justify-end'>
        <div className='cursor-pointer text-red-primary'>Quên mật khẩu?</div>
      </div>
    </div>
  )
}

const LoginSocial = () => {
  const handleLoginSocial = async (social: string) => {
    window.location.href = socialLoginEndpoints('login', `?callback=${window.location.href}`, social)
  }

  return (
    <>
      <div className='mt-2 flex'>
        <div className='border-border-color mb-[10px] flex-1 border-b-[1px]'></div>
        <div className='px-2 text-[12px] text-text-secondary'>Hoặc</div>
        <div className='border-border-color mb-[10px] flex-1 border-b-[1px]'></div>
      </div>
      <div className='mt-4 flex gap-2'>
        <div
          className='flex flex-1 cursor-pointer items-center justify-center rounded bg-gray-bg py-2'
          onClick={() => handleLoginSocial('facebook')}
        >
          <IconFacebook />
        </div>
        <div
          className='flex flex-1 cursor-pointer items-center justify-center rounded bg-gray-bg py-2'
          onClick={() => handleLoginSocial('google')}
        >
          <IconGoogle />
        </div>

        <div
          className='flex flex-1 cursor-pointer items-center justify-center rounded bg-gray-bg py-2'
          onClick={() => handleLoginSocial('microsoft')}
        >
          <IconMicrosoft />
        </div>
      </div>
      <div className='mt-6 text-[12px] text-text-secondary'>
        Bằng cách đăng ký hoặc đăng nhập, bạn đồng ý với{' '}
        <span className='cursor-pointer underline'>Điều khoản sử dụng</span> của chúng tôi và đã đọc{' '}
        <span className='cursor-pointer underline'>Chính sách bảo mật</span>
        của chúng tôi.
      </div>
    </>
  )
}
const Login = () => {
  const router = useRouter()
  const [isLoading, setIsloading] = useState(false)
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'ĐĂNG NHẬP',
      children: <LoginForm />
    },
    {
      key: '2',
      label: 'ĐĂNG KÝ',
      children: <RegForm />
    }
  ]

  const checkCode = async () => {
    const queryParams = queryParamsToObject(window.location.search)
    const code = queryParams.code
    if (code) {
      setIsloading(true)
      try {
        const res = await fetcherAPI(socialCodeEndpoint(code))
        const token = res.data.accessToken
        const resProfile = await fetcherAPI(endPoints.userProfile, token)
        const resCmsUser: any = await fetcherAPI(`/api/user?email=${resProfile.data.email}`)
        if (resCmsUser?.data) {
          const encryptedSessionData = encrypt(resCmsUser.data)

          await Cookies.set('user', encryptedSessionData, { expires: 7 });
          router.push('/')
        } else {
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      } catch (error: any) {
        console.log({ error })
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } finally {
        setIsloading(false)
      }
    }
  }

  useEffect(() => {
    checkCode()
  }, [])


  return (
    <div>
      <div className='login py-[72px]'>
        <div className='border-border-color m-auto max-w-[366px] rounded border-[1px] p-[32px]'>
          {isLoading ? (
            <div className='flex items-center justify-center w-full h-[200px]'>
              <Loading />
            </div>
          ) : (
            <>
              <Tabs defaultActiveKey='1' items={items} onChange={() => { }} />
              <LoginSocial />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
