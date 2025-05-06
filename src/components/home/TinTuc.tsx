import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { formatTitleToSlug } from '../lib/utils'

const TinTuc = async ({ listTinTuc = [] }: any) => {
  const [mainNews, ...subNews] = listTinTuc
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`

  return (
    <div className='flex-1 pb-4'>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>Tin Tức</div>
      <div className='px-4 py-2'>
        <div className='text-lg font-bold text-head-line'>{mainNews?.country?.name}</div>
        <div className='mt-1 flex flex-col gap-4' title={mainNews?.title}>
          <div className='flex-1'>
            <Link href={`${mainSlug}`} className='h-full' prefetch>
              <img
                src={mainNews?.json_base64_image?.image_base64}
                alt={mainNews?.json_base64_image?.title}
                className='w-full object-cover md:h-full'
              />
            </Link>
          </div>
          <div className='flex flex-1 flex-col justify-between'>
            <div className='line-clamp-3 text-lg text-section-high-light md:line-clamp-3'>
              <Link href={`${mainSlug}`}>{mainNews?.short_summary || mainNews?.long_summary}</Link>
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
      <div className='mt-4 grid grid-cols-1 gap-5 px-4'>
        {subNews?.map((item: any, index: number) => {
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div key={index} className={'flex items-center gap-2'}>
              <Link href={`/${slug}`} prefetch className='w-[40%]'>
                <img
                  src={item?.json_base64_image?.image_base64}
                  alt={item?.json_base64_image?.title}
                  className='w-full object-cover'
                />
              </Link>
              <div className='flex-1'>
                <Link href={`/${slug}`} prefetch className=''>
                  <div>
                    {/* <div className='line-clamp-2 text-sm font-bold text-head-line md:line-clamp-3 md:text-base'>
                      {item?.title}
                    </div> */}
                    <div className='font-bold text-head-line'>{item?.country?.name}</div>
                    <div className='line-clamp-3 text-base text-section-high-light md:line-clamp-4'>
                      {item?.short_summary || item?.long_summary}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TinTuc
