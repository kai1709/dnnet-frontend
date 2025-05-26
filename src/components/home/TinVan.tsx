import { ChevronRight, CircleAlert } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { formatTitleToSlug } from '../lib/utils'
import HomeHeader from './HomeHeader'

const TinVan = ({ listTinVan }: any) => {
  return (
    <div>
      <HomeHeader title="TIN VẮN" />
      <div className=''>
        {listTinVan.map((item: any, index: number) => {
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div key={index} className=''>
              <Link
                href={`/${slug}`}
                prefetch
                className='line-clamp-5 py-3 font-medium'
              >
                <div className='w-[30%] text-text-secondary text-[14px] mb-1'>{item?.news_source?.name}</div>
                <div className='line-clamp-5 flex-1 text-[14px] text-text-primary'>
                  {item?.short_summary || item?.long_summary}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-between mb-4'>

        <div className='bg-gray-bg flex text-sm items-center font-medium text-black font-normal border-l-[2px] border-stroke-neutral px-3 py-1'>
          <CircleAlert className='mr-2' />
          Các tin trên đây được tóm tắt bởi AI.
        </div>
        <div className='flex cursor-pointer items-center justify-end gap-1 text-sm text-red-primary font-semibold'>
          Xem tiếp <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default TinVan
