import IconHome from '@/components/components/icons/IconHome'
import { endPoints } from '@/services/endpoints'
import { fetcherAPI } from '@/services/fetcher'
import React from 'react'
import { Info, CalendarDays } from 'lucide-react'
import { capitalize, createMetadata, formatTitleToSlug, getIdFromSlug } from '@/components/lib/utils'
import { Col, Row } from 'antd'
import dayjs from 'dayjs'
import HomeHeader from '@/components/home/HomeHeader'
import Link from 'next/link'
import Comments from './Comments'
import CommentInput from './CommentInput'
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dayjs/locale/vi')
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

dayjs.locale('vi')

const NewsDetail = async ({ params }: any) => {
  const resolvedParams = await params
  const newId = getIdFromSlug(resolvedParams?.id)
  const res: any = await fetcherAPI(
    `${endPoints.getNewsSummaries}/${newId}?fields=*%2Cnews_source.name%2Ccountry.name,comments.*,comments.author.*`
  )
  console.log({ res })
  const detail = res?.data
  const resSummary: any = await fetcherAPI(`${endPoints.getNewsSummaries}?fields=*%2Cnews_source.name%2Ccountry.name`)

  const news = resSummary?.data || []
  const listNotTopNews = news.filter((v: any) => !v?.is_topnews)
  const listTinVan = listNotTopNews.slice(0, 6)
  const listTinTuc = listNotTopNews.filter((v: any) => !listTinVan?.find((item: any) => item?.id === v?.id))
  const comments = detail.comments || []

  return (
    <Row gutter={[20, 20]} className='pt-4'>
      <Col span={24} md={16}>
        <div className='flex items-center gap-2 p-4'>
          <IconHome /> /<h1 className='text-sm font-normal text-head-line'>Tin Tức</h1> /{' '}
          <span className='font-semibold text-red-primary'>{detail?.country?.name}</span>
        </div>

        <div className='p-4'>
          <div className='text-xl font-bold text-head-line-title'>{detail?.title}</div>
          <div className='mt-2 flex text-base font-bold text-head-line'>
            <div className='flex flex-1 items-center font-normal'>
              <img src='/ai.png' />
              <div className='ml-2 text-text-secondary'>AI</div>
            </div>
            <div className='flex items-center text-[14px] font-normal text-text-secondary'>
              <CalendarDays size={16} className='mr-2' />
              {capitalize(dayjs(detail?.date_created).format('dddd, DD/MM/YYYY, HH:mm Z'))}
            </div>
          </div>
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
          <div className='border-b-border-color mb-8 mt-4 whitespace-pre-line border-b-[1px] pb-8 text-text-primary'>
            {detail?.long_summary}
          </div>

          <div className='pt-0'>
            <CommentInput id={detail?.id} />
            <Comments data={comments} />
          </div>

          <HomeHeader title='CÙNG CHUYÊN MỤC' />

          <div className='mt-4 grid grid-cols-1 gap-5'>
            {listTinTuc?.map((item: any, index: number) => {
              const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

              return (
                <div key={index} className={'flex items-center gap-2'}>
                  <Link href={`/${slug}`} prefetch className='w-[35%]'>
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
      </Col>
      <Col span={24} md={8}>
        <HomeHeader title='XEM THÊM' />
        {listTinTuc?.map((item: any, index: number) => {
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`

          return (
            <div key={index} className={'mt-4 flex items-center gap-2'}>
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
                    <div className='line-clamp-3 text-[14px] text-text-primary md:line-clamp-4'>
                      {item?.short_summary || item?.long_summary}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </Col>
    </Row>
  )
}

export default NewsDetail
