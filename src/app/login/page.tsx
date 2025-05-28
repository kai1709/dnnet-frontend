'use client'
import IconFacebook from '@/components/components/icons/IconFacebook'
import IconGoogle from '@/components/components/icons/IconGoogle'
import { Input, Tabs, TabsProps } from 'antd'
import { fetcherAPI } from '@/services/fetcher'
import { socialLoginEndpoints } from '@/services/endpoints'

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
    const res = await fetcherAPI(socialLoginEndpoints(social, 'login', `?callback=${window.location.href}`))
    console.log({ res })
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

  return (
    <div>
      <div className='login py-[72px]'>
        <div className='border-border-color m-auto max-w-[366px] rounded border-[1px] p-[32px]'>
          <Tabs defaultActiveKey='1' items={items} onChange={() => {}} />
          <LoginSocial />
        </div>
      </div>
    </div>
  )
}

export default Login
