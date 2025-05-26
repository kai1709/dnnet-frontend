import IconHome from '@/components/components/icons/IconHome'
import IconRaoVatAmThuc from '@/components/components/icons/IconRaoVatAmThuc'
import IconRaoVatDichVu from '@/components/components/icons/IconRaoVatDichVu'
import IconRaoVatKinhDoanh from '@/components/components/icons/IconRaoVatKinhDoanh'
import IconRaoVatMuaBan from '@/components/components/icons/IconRaoVatMuaBan'
import IconRaoVatNha from '@/components/components/icons/IconRaoVatNha'
import IconRaoVatNhanTin from '@/components/components/icons/IconRaoVatNhanTin'
import IconRaoVatThietBi from '@/components/components/icons/IconRaoVatThietBi'
import IconRaoVatViecLam from '@/components/components/icons/IconRaoVatViecLam'
import IconRaoVatXe from '@/components/components/icons/IconRaoVatXe'
import HomeHeader from '@/components/home/HomeHeader'
import ThoiSu from '@/components/home/ThoiSu'
import TinTuc from '@/components/home/TinTuc'
import TinVan from '@/components/home/TinVan'
import { createMetadata } from '@/components/lib/utils'
import { endPoints } from '@/services/endpoints'
import { fetcherAPI } from '@/services/fetcher'
import { Heart, MessageSquare, ChevronRight } from 'lucide-react'
import Link from 'next/link'

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
  // console.log({ news, listTinVan, listThoiSu, listTinTuc })
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
      <div className='text-[16px] items-center'>
        <div className='flex items-center gap-8 p-4 border-b-[1px] border-b-border-color'>
          <div className='flex items-center cursor-pointer'>
            <IconHome className='icon-home' />
            <h1 className='text-text-primary ml-2'>Trang chủ</h1>
          </div>
          <div className='flex items-center cursor-pointer'>

            <h1 className='text-text-primary'>Tin Tức</h1>
          </div>
          <div className='flex items-center cursor-pointer'>

            <h1 className='text-text-primary'>Kinh Doanh</h1>
          </div>
          <div className='flex items-center cursor-pointer'>

            <h1 className='text-text-primary'>Chuyên Mục</h1>
          </div>
          <div className='flex items-center cursor-pointer'>

            <h1 className='text-text-primary'>Cộng Đồng</h1>
          </div>

        </div>
        <div className='flex flex-col flex-wrap gap-4 pb-10 md:flex-row p-6 pt-8'>
          <div className='flex-1'>
            <ThoiSu listThoiSu={listThoiSu} />
            <div className='block md:hidden'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <TinTuc listTinTuc={listTinTuc} />
            <HomeHeader title='Kinh Doanh' />

            <div className='py-2 mb-4 '>
              <div className='font-bold text-text-secondary mt-3 text-[16px]'>Trao Đổi</div>
              <div className='mt-1 flex gap-4'>
                <div className='flex-1'>
                  <img src='/news-2.png' className='w-full' alt='' />
                </div>
                <div className='flex flex-1 flex-col'>
                  <div className='text-[20px] font-bold text-text-primary'>
                    Khó khăn và tương lai của những ngành nghề đặc trưng của người Việt
                  </div>
                  <div className='mt-1 text-base font-bold text-head-line flex mt-2'>
                    <div className='flex items-center'>
                      <img src='/09.png' />
                      <a href="#" className='text-[14px] text-text-link ml-2 font-normal' target='_blank' rel='noopener noreferrer'>
                        iDnes.cz
                      </a>
                    </div>
                    <div className='flex items-center ml-4 font-normal'>
                      <img src='/ai.png' />
                      <div className='ml-2 text-text-secondary'>AI</div>
                    </div>
                  </div>
                  <div className='flex gap-3 text-base font-bold text-head-line mt-4'>
                    <div className='flex gap-2 items-center'>
                      <MessageSquare size={18} />2
                    </div>
                    <div className='flex gap-2 items-center'>
                      <Heart size={18} />
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HomeHeader title="CHUYÊN MỤC" />

            <div className='py-2 mb-4'>
              <div className='font-bold text-text-secondary mt-3 text-[16px]'>Thể Thao</div>
              <div className='mt-1'>
                <div className='relative h-[300px] flex-1 mb-4'>
                  <img src='/golf.png' className='h-full w-full object-cover' />

                </div>
                <div className='flex flex-1 flex-col justify-between'>
                  <div className='line-clamp-3 text-xl font-bold text-text-primary md:line-clamp-5 mb-1'>
                    <Link href={`${'#'}`}>Những sân golf đẹp nhất Châu Âu</Link>
                  </div>
                  <div className='flex mb-1'>
                    <div className='mt-1 text-base font-bold text-head-line flex flex-1'>
                      <div className='flex items-center'>
                        <img src='/09.png' />
                        <a href="" className='text-[14px] text-text-link ml-2 font-normal' target='_blank' rel='noopener noreferrer'>
                          Hội Golf Châu Âu
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
                    <Link href={`${'#'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Link>
                  </div>

                </div>
              </div>
            </div>

            <HomeHeader title="CỘNG ĐỒNG" />

            <div className='py-2 mb-4'>
              <div className='font-bold text-text-secondary mt-3 text-[16px]'>Sinh Hoạt Cộng Đồng</div>
              <div className='mt-1'>
                <div className='relative h-[300px] flex-1 mb-4'>
                  <img src='/news-3.png' className='h-full w-full object-cover' />

                </div>
                <div className='flex flex-1 flex-col justify-between'>
                  <div className='line-clamp-3 text-xl font-bold text-text-primary md:line-clamp-5 mb-1'>
                    <Link href={`${'#'}`}>Tưng bừng ngày Văn hóa Việt Nam tại Slovakia</Link>
                  </div>
                  <div className='flex mb-1'>
                    <div className='mt-1 text-base font-bold text-head-line flex flex-1'>
                      <div className='flex items-center'>
                        <img src='/09.png' />
                        <a href="" className='text-[14px] text-text-link ml-2 font-normal' target='_blank' rel='noopener noreferrer'>
                          Hội Người Việt Nam Slovakia
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
                    <Link href={`${'#'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='hidden md:block'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <div className='advertise'></div>
            <div className='mt-4'>
              <HomeHeader title="KÊNH THÔNG TIN RAO VẶT" />
              <div className='mt-4'>
                <div className='grid grid-cols-2 gap-2 mb-4'>
                  {listRaoVat.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className='cursor-pointer flex p-[10px] border-[1px] border-[#E5E7EB] rounded items-center'
                      >
                        <div className='w-[30px] h-[30px] rounded-3xl flex items-center justify-center' style={{ backgroundColor: item.color }}>
                          <item.icon />
                        </div>
                        <div className='flex-1 pl-4 text-xs font-bold text-head-line md:text-base text-text-primary'>
                          {item?.title}
                          <div className='text-xs text-text-secondary font-normal'>{item.count}</div>
                        </div>

                      </div>
                    )
                  })}
                </div>
                <div className='bg-secondary-100 px-4 py-3 text-lg font-bold text-secondary-500 border-l-[2px] border-l-secondary-500' style={{ lineHeight: '1.125rem' }}>MỚI</div>
                <div className='mt-4'>
                  {listMoi.map((item: any, index: number) => {
                    return (
                      <div key={index} className='mb-4 flex gap-2'>
                        <div className='flex-1'>
                          <div className='font-medium text-text-secondary text-[12px]'>{item?.date}</div>
                          <div className='text-text-primary text-[14px]'>{item?.content}</div>
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
