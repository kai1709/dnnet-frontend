import IconHome from '@/components/components/icons/IconHome'
import { endPoints } from '@/services/endpoints'
import { fetcherAPI } from '@/services/fetcher'
import React from 'react'
import { Heart, MessageSquare, Info } from 'lucide-react'
import { createMetadata, getIdFromSlug } from '@/components/lib/utils'

// type PageProps = {
//   params: { id: string }
// }

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params
  const newId = getIdFromSlug(resolvedParams.id)
  const res: any = await fetcherAPI(`${endPoints.getNewsSummaries}/${newId}?fields=*%2Cnews_source.name%2Ccountry.name`)
  const detail = res?.data

  return createMetadata({
    title: detail?.title,
    description: detail?.short_summary
    // image: detail?.json_base64_image?.image_base64
  })
}

const NewsDetail = async ({ params }: any) => {
  const resolvedParams = await params
  const newId = getIdFromSlug(resolvedParams?.id)
  const res: any = await fetcherAPI(`${endPoints.getNewsSummaries}/${newId}?fields=*%2Cnews_source.name%2Ccountry.name`)
  const detail = res?.data

  return (
    <div>
      <div className='flex items-center gap-2 p-4'>
        <IconHome />
        <h1 className='text-sm font-bold text-head-line'>Tin Tức</h1>
      </div>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>
        {detail?.country?.name}
      </div>

      <div className='p-4'>
        <div className='text-xl font-bold text-head-line-title'>{detail?.title}</div>
        <div className='mt-4 whitespace-pre-line text-section-high-light'>{detail?.short_summary}</div>
        {!!detail?.json_base64_image?.image_base64 && (
          <div className='relative'>
            <img
              src={detail?.json_base64_image?.image_base64}
              alt={detail?.json_base64_image?.title}
              className='mt-4 w-full'
            />
            <Info className='absolute bottom-2 right-2' />
          </div>
        )}
        <div className='mt-4 whitespace-pre-line text-section-high-light'>{detail?.long_summary}</div>
        <div className='mt-10 text-base font-bold text-head-line'>
          <div>
            Nguồn:{' '}
            <a href={detail?.source_url} target='_blank' rel='noopener noreferrer' className=' '>
              {detail?.news_source?.name}
            </a>
          </div>
          <div>Chia sẻ: AI</div>
        </div>

        <div className='mt-4 flex gap-4 text-base font-bold text-head-line'>
          <div className='flex gap-2'>
            <MessageSquare />
          </div>
          <div className='flex gap-2'>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
