import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { formatTitleToSlug } from '../lib/utils'

const TinVan = ({ listTinVan }: any) => {
  return (
    <div>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>TIN VẮN</div>
      <div className='bg-section-border'>
        {listTinVan.map((item: any, index: number) => {
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div key={index} className=''>
              <Link
                href={`/${slug}`}
                prefetch
                className='line-clamp-5 flex items-center gap-1 border-t-[2px] border-t-head-line px-4 py-4 font-medium'
              >
                <div className='w-[30%] text-head-line'>{item?.news_source?.name}</div>
                <div className='line-clamp-5 flex-1 text-section-high-light'>{item?.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-between p-2'>
        <div className='text-sm font-medium text-head-line'>Các tin trên đây được tóm tắt bởi AI. </div>
        <div className='flex cursor-pointer items-center justify-end gap-1 text-sm text-head-line'>
          Xem tiếp <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default TinVan
