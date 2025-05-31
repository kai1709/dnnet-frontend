import IconRaoVatAmThuc from '@/components/components/icons/IconRaoVatAmThuc'
import IconRaoVatDichVu from '@/components/components/icons/IconRaoVatDichVu'
import IconRaoVatKinhDoanh from '@/components/components/icons/IconRaoVatKinhDoanh'
import IconRaoVatMuaBan from '@/components/components/icons/IconRaoVatMuaBan'
import IconRaoVatNha from '@/components/components/icons/IconRaoVatNha'
import IconRaoVatNhanTin from '@/components/components/icons/IconRaoVatNhanTin'
import IconRaoVatThietBi from '@/components/components/icons/IconRaoVatThietBi'
import IconRaoVatViecLam from '@/components/components/icons/IconRaoVatViecLam'
import IconRaoVatXe from '@/components/components/icons/IconRaoVatXe'
import ChuyenMuc from '@/components/home/ChuyenMuc'
import CongDong from '@/components/home/CongDong'
import HomeHeader from '@/components/home/HomeHeader'
import ThoiSu from '@/components/home/ThoiSu'
import TinTuc from '@/components/home/TinTuc'
import TinVan from '@/components/home/TinVan'
import { createMetadata } from '@/components/lib/utils'
import { endPoints } from '@/services/endpoints'
import { fetcherAPI } from '@/services/fetcher'
import { Heart, MessageSquare, ChevronRight } from 'lucide-react'

export const generateMetadata = () => {
  return createMetadata({})
}

const HomePage = async () => {
  const res: any = await fetcherAPI(`${endPoints.getNewsSummaries}?fields=*%2Cnews_source.name%2Ccountry.name`)
  const news = res?.data || []
  const listThoiSu = news.filter((v: any) => v?.is_topnews)
  const listNotTopNews = news.filter((v: any) => !v?.is_topnews)
  const listTinVan = listNotTopNews.slice(0, 6)
  const listTinTuc = listNotTopNews.filter((v: any) => !listTinVan?.find((item: any) => item?.id === v?.id))
  // const resCongDong: any = await fetcherAPI(
  //   `${endPoints.getNewsSummaries}?fields=*%2Cnews_source.name%2Ccountry.name&filter={ "news_type": { "_eq": 3 }}`
  // )

  const congDongNews = news.filter((v: any) => v.news_type === 3)
  const theThaoNews = news.filter((v: any) => v.news_type === 4)
  const listRaoVat = [
    {
      title: `Nhà cửa, đất đai`,
      icon: IconRaoVatNha,
      count: 10,
      color: '#FEF6DC'
    },
    {
      title: `Việc làm`,
      icon: IconRaoVatViecLam,
      count: 10,
      color: '#FBE0D3'
    },
    {
      title: `Dịch vụ`,
      icon: IconRaoVatDichVu,
      count: 10,
      color: '#E8DCFD'
    },
    {
      title: `Nơi kinh doanh`,
      icon: IconRaoVatKinhDoanh,
      count: 10,
      color: '#DBECFD'
    },
    {
      title: `Ẩm thực`,
      icon: IconRaoVatAmThuc,
      count: 10,
      color: '#D8FAD2'
    },
    {
      title: `Trang thiết bị`,
      icon: IconRaoVatThietBi,
      count: 10,
      color: '#F9FCCC'
    },
    {
      title: `Mua bán, kinh doanh `,
      icon: IconRaoVatMuaBan,
      count: 10,
      color: '#F3F4F6'
    },
    {
      title: `Ô tô, xe máy, xe đạp`,
      icon: IconRaoVatXe,
      count: 10,
      color: '#FDD6DA'
    },
    {
      title: `Nhắn tin, thông báo`,
      icon: IconRaoVatNhanTin,
      count: 10,
      color: '#FDEFD8'
    }
  ]
  const listMoi = [
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Nhận người giúp việc cho cửa hàng tại Praha.
                Công việc nhàn hạ, thù lao cao.
                Liên hệ anh Hải. sđt....`
    },
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Tìm sinh viên phụ đạo kèm học sinh lớp 1`
    },
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Cần chuyển nhượng cửa hàng bán thực phẩm tại Praha.`
    }
  ]

  return (
    <>
      <div className='items-center text-[16px]'>
        {/* <div className='border-b-border-color flex items-center gap-8 border-b-[1px] p-4'>
          <div className='flex cursor-pointer items-center'>
            <IconHome className='icon-home' />
            <h1 className='ml-2 text-text-primary'>Trang chủ</h1>
          </div>
          <div className='flex cursor-pointer items-center'>
            <h1 className='text-text-primary'>Tin Tức</h1>
          </div>
          <div className='flex cursor-pointer items-center'>
            <h1 className='text-text-primary'>Kinh Doanh</h1>
          </div>
          <div className='flex cursor-pointer items-center'>
            <h1 className='text-text-primary'>Chuyên Mục</h1>
          </div>
          <div className='flex cursor-pointer items-center'>
            <h1 className='text-text-primary'>Cộng Đồng</h1>
          </div>
        </div> */}
        <div className='flex flex-col flex-wrap gap-4 p-6 pb-10 pt-8 md:flex-row'>
          <div className='flex-1'>
            <ThoiSu listThoiSu={listThoiSu} />
            <div className='block md:hidden'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <TinTuc listTinTuc={listTinTuc} />
            <HomeHeader title='Kinh Doanh' />

            <div className='mb-4 py-2'>
              <div className='mt-3 text-[16px] font-bold text-text-secondary'>Trao Đổi</div>
              <div className='mt-1 flex gap-4'>
                <div className='flex-1'>
                  <img src='/news-2.png' className='w-full' alt='' />
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='text-[20px] font-bold text-text-primary'>
                    Khó khăn và tương lai của những ngành nghề đặc trưng của người Việt
                  </div>
                  <div className='mt-1 mt-2 flex text-base font-bold text-head-line'>
                    <div className='flex items-center'>
                      <img src='/09.png' />
                      <a
                        href='#'
                        className='ml-2 text-[14px] font-normal text-text-link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        iDnes.cz
                      </a>
                    </div>
                    <div className='ml-4 flex items-center font-normal'>
                      <img src='/ai.png' />
                      <div className='ml-2 text-text-secondary'>AI</div>
                    </div>
                  </div>
                  <div className='mt-4 flex gap-3 text-base font-bold text-head-line'>
                    <div className='flex items-center gap-2'>
                      <MessageSquare size={18} />2
                    </div>
                    <div className='flex items-center gap-2'>
                      <Heart size={18} />
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ChuyenMuc data={theThaoNews[0]} />

            <CongDong data={congDongNews[0]} />
          </div>
          <div className='flex-1'>
            <div className='hidden md:block'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <div className='advertise'></div>
            <div className='mt-4'>
              <HomeHeader title='KÊNH THÔNG TIN RAO VẶT' />
              <div className='mt-4'>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                  {listRaoVat.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className='flex cursor-pointer items-center rounded border-[1px] border-[#E5E7EB] p-[10px]'
                      >
                        <div
                          className='flex h-[30px] w-[30px] items-center justify-center rounded-3xl'
                          style={{ backgroundColor: item.color }}
                        >
                          <item.icon />
                        </div>
                        <div className='flex-1 pl-4 text-xs font-bold text-head-line text-text-primary md:text-base'>
                          {item?.title}
                          <div className='text-xs font-normal text-text-secondary'>{item.count}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div
                  className='border-l-[2px] border-l-secondary-500 bg-secondary-100 px-4 py-3 text-lg font-bold text-secondary-500'
                  style={{ lineHeight: '1.125rem' }}
                >
                  MỚI
                </div>
                <div className='mt-4'>
                  {listMoi.map((item: any, index: number) => {
                    return (
                      <div key={index} className='mb-4 flex gap-2'>
                        <div className='flex-1'>
                          <div className='text-[12px] font-medium text-text-secondary'>{item?.date}</div>
                          <div className='text-[14px] text-text-primary'>{item?.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='flex cursor-pointer items-center justify-end gap-1 text-red-primary'>
                  Xem tiếp <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
