'use client'
import { Heart, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import HomeHeader from './HomeHeader'

const CongDong = ({ data }: { data?: any }) => (
  <>
    <HomeHeader title='CỘNG ĐỒNG' />

    <div className='mb-4 py-2'>
      <div className='mt-3 text-[16px] font-bold text-text-secondary'>Sinh Hoạt Cộng Đồng</div>
      <div className='mt-1'>
        <div className='relative mb-4 h-[300px] flex-1'>
          <img
            src={data?.json_base64_image?.image_base64}
            alt={data?.json_base64_image?.title}
            className='w-full object-cover md:h-full'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          <div className='mb-1 line-clamp-3 text-xl font-bold text-text-primary md:line-clamp-5'>
            <Link href={`${'#'}`}>{data?.title}</Link>
          </div>
          <div className='mb-1 flex'>
            <div className='mt-1 flex flex-1 text-base font-bold text-head-line'>
              <div className='flex items-center'>
                <img src='/09.png' />
                <a
                  href=''
                  className='ml-2 text-[14px] font-normal text-text-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {data?.news_source?.name}
                </a>
              </div>
              <div className='ml-4 flex items-center font-normal'>
                <img src='/ai.png' />
                <div className='ml-2 text-text-secondary'>AI</div>
              </div>
            </div>
            <div className='flex gap-4 text-base font-bold text-head-line'>
              <div className='flex gap-2'>
                <MessageSquare size={18} />
              </div>
              <div className='flex gap-2'>
                <Heart size={18} />
              </div>
            </div>
          </div>

          <div className='mt-2 line-clamp-3 text-[14px] text-section-high-light md:line-clamp-3'>
            <Link href={`${'#'}`}>{data?.short_summary || data?.long_summary}</Link>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default CongDong
