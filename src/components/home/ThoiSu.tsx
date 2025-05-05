import { endPoints } from '@/services/endpoints'
import { fetcherAPI } from '@/services/fetcher'
import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { formatTitleToSlug } from '../lib/utils'
import { cn } from '@/lib/utils'

const ThoiSu = async () => {
  // const isMobile = await getDevice()
  const res: any = await fetcherAPI(`${endPoints.getNewsSummaries}?fields=*%2Cnews_source.name%2Ccountry.name`)
  let news = res?.data || []
  news = [...news, ...news, ...news, ...news]
  const mainNews = news[0]
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`
  const subNews = news.slice(1, 4)

  return (
    <div className='flex-1 pb-4'>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>THỜI SỰ</div>
      <div className='px-4 py-2'>
        <div className='text-lg font-bold text-head-line'>{mainNews?.country?.name}</div>
        <div className='flex gap-4'>
          <div className='h-[320px] flex-1 md:h-[230px]'>
            <Link href={`${mainSlug}`} className='h-full'>
              <img
                src={mainNews?.json_base64_image?.image_base64}
                alt={mainNews?.json_base64_image?.title}
                className='h-full object-cover'
              />
            </Link>
          </div>
          <div className='flex flex-1 flex-col justify-between'>
            <div className='text-xl font-bold text-head-line-title'>
              <Link href={`${mainSlug}`}>{mainNews?.title}</Link>
            </div>
            <div className='text-base font-bold text-head-line'>
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
            <div key={index} className={cn(isLast && 'hidden md:block')}>
              <div className='text-lg font-bold text-head-line'>{item?.country?.name}</div>
              <Link href={`/${slug}`}>
                <img
                  src={item?.json_base64_image?.image_base64}
                  alt={item?.json_base64_image?.title}
                  className='w-full'
                />
                <div className='py-4 text-section-high-light'>{item?.title}</div>
              </Link>
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
