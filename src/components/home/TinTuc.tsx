import { Heart, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { formatTitleToSlug } from '../lib/utils'
import HomeHeader from './HomeHeader'

const TinTuc = async ({ listTinTuc = [] }: any) => {
  const [mainNews, ...subNews] = listTinTuc
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`

  return (
    <div className='flex-1 pb-4'>
      <HomeHeader title="TIN TỨC" />
      <div className='py-2 pt-6'>
        <div className='text-lg font-bold text-text-secondary'>{mainNews?.country?.name}</div>
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
            <div className='line-clamp-3 text-xl font-bold text-text-primary md:line-clamp-5'>
              <Link href={`${mainSlug}`}>{mainNews?.title}</Link>
            </div>
            <div className='flex'>
              <div className='mt-1 text-base font-bold text-head-line flex flex-1'>
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
              <div className='flex gap-4 text-base font-bold text-head-line'>
                <div className='flex gap-2'>
                  <MessageSquare size={18} />
                </div>
                <div className='flex gap-2'>
                  <Heart size={18} />
                </div>
              </div>
            </div>

            <div className='line-clamp-3 text-[14px] text-section-high-light md:line-clamp-3 mt-2'>
              <Link href={`${mainSlug}`}>{mainNews?.short_summary || mainNews?.long_summary}</Link>
            </div>

          </div>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-5'>
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
              <div className='flex-1 pl-2'>
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
