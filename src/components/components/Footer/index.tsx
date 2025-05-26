import { Facebook, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='border-t-border-color grid grid-cols-2 gap-3 border-t-[2px] bg-main-background p-[20px] md:grid-cols-3'>
        <div className=''>
          <Link href='/'>
            <img src='/logo-1.png' className='w-[220px]' alt='logo' />
            {/* <img src='/logo-mobile.png' className='block md:hidden' alt='logo mobile' /> */}
          </Link>
        </div>
        <div className='text-[16px] font-bold text-text-primary'>
          Liên hệ
          <div className='mt-2'>
            <span className='font-normal'>Email:</span> info@dnnet.eu
          </div>
          <div className='mt-2'>
            <span className='mt-2 font-normal'>Điện Thoại:</span> 091 234 5678
          </div>
        </div>
        <div className='text-[16px] font-bold text-text-primary'>
          Kết nối với chúng tôi
          <div className='mt-2 flex gap-3'>
            <Facebook className='cursor-pointer text-text-primary' />
            <Youtube className='cursor-pointer text-text-primary' />
          </div>
        </div>
      </div>
      <div className='bg-red-primary px-[20px] py-2 text-white md:flex'>
        <div className='flex-1'>© 2025. Toàn bộ bản quyền thuộc DNNet.eu</div>
        <div className='mt-2 flex md:mt-0'>
          <div className='cursor-pointer px-4'>Điều Khoản Sử Dụng</div>
          <div className='cursor-pointer border-l-[1px] border-r-[1px] border-l-white border-r-white px-4'>
            Chính Sách Bảo Mật
          </div>
          <div className='cursor-pointer px-4 pr-0'>Cookie</div>
        </div>
      </div>
    </>
  )
}

export default Footer
