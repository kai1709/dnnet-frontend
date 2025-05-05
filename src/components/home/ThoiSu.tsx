import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { formatTitleToSlug } from '../lib/utils'
import { cn } from '@/lib/utils'

const ThoiSu = async ({ mainNews, subNews }: any) => {
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`

  return (
    <div className='flex-1 pb-4'>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>THỜI SỰ</div>
      <div className='px-4 py-2'>
        <div className='text-lg font-bold text-head-line'>{mainNews?.country?.name}</div>
        <div className='flex gap-4' title={mainNews?.title}>
          <div className='h-auto flex-1 md:h-[230px]'>
            <Link href={`${mainSlug}`} className='h-full' prefetch>
              <img
                src={mainNews?.json_base64_image?.image_base64}
                alt={mainNews?.json_base64_image?.title}
                className='w-full object-cover md:h-full'
              />
            </Link>
          </div>
          <div className='flex flex-1 flex-col justify-between'>
            <div className='line-clamp-3 text-xl font-bold text-head-line-title md:line-clamp-5'>
              <Link href={`${mainSlug}`}>{mainNews?.title}</Link>
            </div>
            <div className='mt-1 text-base font-bold text-head-line'>
              <div>
                Nguồn:{' '}
                <a href={mainNews?.source_url} target='_blank' rel='noopener noreferrer'>
                  {mainNews?.news_source?.name}
                </a>
              </div>
              <div>Chia sẻ: AI</div>
            </div>
            <div className='flex gap-4 text-base font-bold text-head-line'>
              <div className='flex gap-2'>
                <MessageSquare />
              </div>
              <div className='flex gap-2'>
                <Heart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-3 px-4 md:grid-cols-3'>
        {subNews?.map((item: any, index: number) => {
          const isLast = index === subNews.length - 1
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div key={index} className={cn(isLast && 'hidden md:block')} title={item?.title}>
              <div className='text-lg font-bold text-head-line'>{item?.country?.name}</div>
              <Link href={`/${slug}`} prefetch className=''>
                <img
                  src={item?.json_base64_image?.image_base64}
                  alt={item?.json_base64_image?.title}
                  className='h-[125px] w-full'
                />
              </Link>
              <div className='py-4 text-section-high-light'>
                <Link href={`/${slug}`} prefetch className='line-clamp-5'>
                  {item?.title}
                </Link>
              </div>
              <div className='mb-4 text-base font-bold text-head-line'>
                <div>
                  Nguồn:{' '}
                  <a href={item?.source_url} target='_blank' rel='noopener noreferrer'>
                    {item?.news_source?.name}
                  </a>
                </div>
                <div>Chia sẻ: AI</div>
              </div>
              <div className='flex gap-4 text-base font-bold text-head-line'>
                <div className='flex gap-2'>
                  <MessageSquare />
                </div>
                <div className='flex gap-2'>
                  <Heart />
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
