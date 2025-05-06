import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#555]'>
      <div className='p-4'>
        <Link href='/'>
          <img src='/logo-footer.png' className='w-[220px]' alt='logo' />
          {/* <img src='/logo-mobile.png' className='block md:hidden' alt='logo mobile' /> */}
        </Link>
      </div>
      <div className='h-[100px] text-center text-sm text-[#fff]'>Menu - Liên hệ</div>
    </div>
  )
}

export default Footer
