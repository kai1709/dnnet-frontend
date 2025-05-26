import { Facebook, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-main-background border-t-[2px] border-t-gray-bg grid grid-cols-2 gap-3 md:grid-cols-3 p-[20px]'>
        <div className=''>
          <Link href='/'>
            <img src='/logo-1.png' className='w-[220px]' alt='logo' />
            {/* <img src='/logo-mobile.png' className='block md:hidden' alt='logo mobile' /> */}
          </Link>
        </div>
        <div className='text-[16px] text-text-primary font-bold'>
          Liên hệ
          <div className='mt-2'><span className='font-normal'>Email:</span>  info@dnnet.eu</div>
          <div className='mt-2'><span className='font-normal mt-2'>Điện Thoại:</span> 091 234 5678</div>
        </div>
        <div className='text-[16px] text-text-primary font-bold'>
          Kết nối với chúng tôi
          <div className='flex gap-3 mt-2'>
            <Facebook className='text-text-primary cursor-pointer' />
            <Youtube className='text-text-primary cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='bg-red-primary text-white flex px-[20px] py-2'>
        <div className='flex-1'>
          © 2025. Toàn bộ bản quyền thuộc DNNet.eu
        </div>
        <div className='flex'>
          <div className='px-4 cursor-pointer'>Điều Khoản Sử Dụng</div>
          <div className='px-4 cursor-pointer border-r-[1px] border-r-white border-l-[1px] border-l-white'>Chính Sách Bảo Mật</div>
          <div className='px-4 cursor-pointer pr-0'>Cookie</div>
        </div>
      </div>
    </>
  )
}

export default Footer
