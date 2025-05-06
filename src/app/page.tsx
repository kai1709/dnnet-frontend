import IconHome from '@/components/components/icons/IconHome'
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
  // console.log({ news, listTinVan, listThoiSu, listTinTuc })
  const listRaoVat = [
    {
      title: `Nhà cửa, đất đai`,
      icon: `/icon-rao-vat/icon-home.png`,
      count: 1
    },
    {
      title: ` Việc làm`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      count: 1
    },
    {
      title: `Dịch vụ`,
      icon: `/icon-rao-vat/icon-dich-vu.png`,
      count: 1
    },
    {
      title: `Nơi kinh doanh`,
      icon: `/icon-rao-vat/icon-kinh-doanh.png`,
      count: 1
    },
    {
      title: `Ẩm thực`,
      icon: `/icon-rao-vat/icon-am-thuc.png`,
      count: 1
    },
    {
      title: `Trang thiết bị cửa hàng, văn phòng`,
      icon: `/icon-rao-vat/icon-thiet-bi.png`,
      count: 1
    },
    {
      title: `Mua bán, kinh doanh `,
      icon: `/icon-rao-vat/icon-mua-ban.png`,
      count: 1
    },
    {
      title: `Ô tô, xe máy, xe đạp`,
      icon: `/icon-rao-vat/icon-oto.png`,
      count: 1
    },
    {
      title: `Nhắn tin, thông báo`,
      icon: `/icon-rao-vat/icon-nhan-tin.png`,
      count: 1
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
      <div className=''>
        <div className='flex items-center gap-2 p-4'>
          <IconHome className='text-head-line' />
          <h1 className='text-sm font-bold text-head-line'>Trang chủ</h1>
        </div>
        <div className='flex flex-col flex-wrap gap-1 pb-10 md:flex-row'>
          <div className='flex-1'>
            <ThoiSu listThoiSu={listThoiSu} />
            <div className='block md:hidden'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <TinTuc listTinTuc={listTinTuc} />
            <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>Kinh Doanh</div>

            <div className='px-4 py-2'>
              <div className='text-lg font-bold text-head-line'>Trao Đổi</div>
              <div className='mt-1 flex gap-4'>
                <div className='flex-1'>
                  <img src='/news-2.png' className='w-full' alt='' />
                </div>
                <div className='flex flex-1 flex-col justify-between'>
                  <div className='text-xl font-bold text-head-line-title'>
                    Khó khăn và tương lai của những ngành nghề đặc trưng của người Việt
                  </div>
                  <div className='text-base font-bold text-head-line'>
                    <div>Chia sẻ: Hội Doanh Nghiệp Séc</div>
                  </div>
                  <div className='flex gap-3 text-base font-bold text-head-line'>
                    <div className='flex gap-2'>
                      <MessageSquare />2
                    </div>
                    <div className='flex gap-2'>
                      <Heart />
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>Chuyên Mục</div>

            <div className='px-4 py-2'>
              <div className='text-lg font-bold text-head-line'>Thể Thao</div>
              <div className='mt-1'>
                <div className='relative h-[300px] flex-1'>
                  <img src='/golf.png' className='h-full w-full object-cover' />
                  <div className='absolute bottom-2 right-2 text-xl font-bold text-white md:bottom-5 md:right-12 md:text-[36px]'>
                    Những sân golf
                    <br /> đẹp nhất Châu Âu
                  </div>
                </div>
                <div className='mt-4 flex'>
                  <div className='flex-1'>
                    <div className='flex gap-4 text-base font-bold text-head-line'>
                      <div className='flex gap-2'>
                        <MessageSquare />2
                      </div>
                      <div className='flex gap-2'>
                        <Heart />
                        430
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-1 flex-col justify-between'>
                      <div className='text-base font-bold text-head-line'>
                        <div>Chia sẻ: Hội Golf Châu Âu</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-4 text-section-high-light'>
                  Chuyên mục đặc biệt Những sân golf đẹp nhất Châu Âu sẽ lần lượt giới thiệu với các bạn những sân chơi
                  golf được người Việt yêu chuộng nhất tại Châu Âu. Dưới mỗi bài viết về các sân cũng là nơi để những
                  người đã từng đến chơi chia sẻ những trải nghiệm của mình với mọi người...
                </div>
              </div>
            </div>

            <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>Cộng Đồng</div>

            <div className='px-4 py-2'>
              <div className='text-lg font-bold text-head-line'>Sinh Hoạt Cộng Đồng</div>
              <div className='mb-2 text-[28px] font-bold text-head-line'>
                Tưng bừng ngày văn hoá Việt Nam tại Slovakia
              </div>
              <div className=''>
                <div className='relative h-[300px] flex-1'>
                  <img src='/news-3.png' className='h-full w-full object-cover' />
                </div>
                <div className='mt-4 flex flex-col md:flex-row'>
                  <div className='flex-1'>
                    <div className='flex gap-4 text-base font-bold text-head-line'>
                      <div className='flex gap-2'>
                        <MessageSquare />2
                      </div>
                      <div className='flex gap-2'>
                        <Heart />
                        430
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 text-base font-bold text-head-line md:mt-0'>
                    <div>Chia sẻ: Hội Người Việt Nam Slovakia</div>
                  </div>
                </div>
                <div className='mt-4 text-section-high-light'>
                  Sự kiện Ngày Việt Nam tại Slovakia lần thứ 3 đã thu hút hơn 10.000 lượt người tham quan, trong đó phần
                  lớn là người dân sở tại. Đây là sự kiện quy mô lớn nhất từ trước tới nay do Đại sứ quán Việt Nam tại
                  Slovakia cùng cộng đồng người Việt Nam tổ chức.
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='hidden md:block'>
              <TinVan listTinVan={listTinVan} />
            </div>
            <div className='advertise'></div>
            <div>
              <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>
                KÊNH THÔNG TIN - RAO VẶT
              </div>
              <div className='mt-4 px-4'>
                <div className='grid grid-cols-3 gap-2'>
                  {listRaoVat.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className='relative flex h-[140px] gap-[1px] border-[1px] border-head-line p-1 md:h-[115px]'
                      >
                        <div>
                          <img src={item?.icon} alt={item?.title} className='w-[40px]' />
                        </div>
                        <div className='flex-1 pl-4 text-xs font-bold text-head-line md:text-base'>{item?.title}</div>
                        <div className='absolute bottom-1 right-1 text-xs text-head-line'>10</div>
                      </div>
                    )
                  })}
                </div>
                <div className='mt-1 font-bold text-head-line'>Mới</div>
                <div>
                  {listMoi.map((item: any, index: number) => {
                    return (
                      <div key={index} className='mb-2 flex gap-2'>
                        <div className='w-[40px]'>
                          <img src={item?.icon} alt='' className='w-full' />
                        </div>
                        <div className='flex-1'>
                          <div className='font-medium text-head-line'>{item?.date}</div>
                          <div className='text-section-high-light'>{item?.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='flex cursor-pointer items-center justify-end gap-1 text-head-line'>
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
