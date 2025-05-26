import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { formatTitleToSlug } from '../lib/utils'
import { cn } from '@/lib/utils'
import HomeHeader from './HomeHeader'

const ThoiSu = async ({ listThoiSu }: any) => {
  const [mainNews, ...subNews] = listThoiSu
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`

  return (
    <div className='flex-1 pb-4'>
      <HomeHeader title="THỜI SỰ" />
      <div className='py-2 mt-2'>
        <div className='text-lg font-bold text-text-secondary'>{mainNews?.country?.name}</div>
        <div className='mt-1 flex gap-4' title={mainNews?.title}>
          <div className='h-auto flex-1 md:h-[230px]'>
            <Link href={`${mainSlug}`} className='h-full' prefetch>
              <img
                src={mainNews?.json_base64_image?.image_base64}
                alt={mainNews?.json_base64_image?.title}
                className='w-full object-cover md:h-full'
              />
            </Link>
          </div>
          <div className='flex flex-1 flex-col'>
            <div className='line-clamp-3 text-xl font-bold text-text-primary md:line-clamp-5'>
              <Link href={`${mainSlug}`}>{mainNews?.title}</Link>
            </div>
            <div className='mt-1 text-base font-bold text-head-line flex'>
              <div className='flex items-center'>
                <img src='/09.png' />
                <a href={mainNews?.source_url} className='text-[14px] text-text-link ml-2 font-normal' target='_blank' rel='noopener noreferrer'>
                  {mainNews?.news_source?.name}
                </a>
              </div>
              <div className='flex items-center ml-4 font-normal'>
                <img src='/ai.png' />
                <div className='ml-2 text-text-secondary'>AI</div>
              </div>
            </div>
            <div className='flex gap-4 text-base font-bold text-head-line mt-4'>
              <div className='flex gap-2'>
                <MessageSquare size={18} />
              </div>
              <div className='flex gap-2'>
                <Heart size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-3 md:grid-cols-3'>
        {subNews?.map((item: any, index: number) => {
          const isLast = index === subNews.length - 1
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div
              key={index}
              className={cn('flex flex-col justify-between', isLast && 'hidden md:flex')}
              title={item?.title}
            >
              <div>
                <div className='text-lg font-bold text-text-secondary'>{item?.country?.name}</div>
                <Link href={`/${slug}`} prefetch>
                  <img
                    src={item?.json_base64_image?.image_base64}
                    alt={item?.json_base64_image?.title}
                    className='h-[125px] w-full object-cover'
                  />
                </Link>
                <div className='py-4 text-text-primary font-semibold'>
                  <Link href={`/${slug}`} prefetch className='line-clamp-3'>
                    {item?.title}
                  </Link>
                </div>
              </div>
              <div>
                <div className='mb-4 text-base font-bold text-head-line flex'>
                  <div className='flex items-center'>
                    <img src='/09.png' />
                    <a href={item?.source_url} className='text-[14px] text-text-link ml-2 font-normal' target='_blank' rel='noopener noreferrer'>
                      {item?.news_source?.name}
                    </a>
                  </div>
                  <div className='flex items-center ml-4 font-normal'>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ThoiSu
