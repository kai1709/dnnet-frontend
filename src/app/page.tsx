import IconHome from "@/components/components/icons/IconHome";
import ThoiSu from "@/components/home/ThoiSu";
import TinVan from "@/components/home/TinVan";
import { createMetadata } from "@/components/lib/utils";
import { Heart, MessageSquare, ChevronRight } from "lucide-react";

export const generateMetadata = () => {
  return createMetadata({});
};

const HomePage = async () => {
  const listRaoVat = [
    {
      title: `Nhà cửa, đất đai`,
      icon: `/icon-rao-vat/icon-home.png`,
      count: 1,
    },
    {
      title: ` Việc làm`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      count: 1,
    },
    {
      title: `Dịch vụ`,
      icon: `/icon-rao-vat/icon-dich-vu.png`,
      count: 1,
    },
    {
      title: `Nơi kinh doanh`,
      icon: `/icon-rao-vat/icon-kinh-doanh.png`,
      count: 1,
    },
    {
      title: `Ẩm thực`,
      icon: `/icon-rao-vat/icon-am-thuc.png`,
      count: 1,
    },
    {
      title: `Trang thiết bị cửa hàng, văn phòng`,
      icon: `/icon-rao-vat/icon-thiet-bi.png`,
      count: 1,
    },
    {
      title: `Mua bán, kinh doanh `,
      icon: `/icon-rao-vat/icon-mua-ban.png`,
      count: 1,
    },
    {
      title: `Ô tô, xe máy, xe đạp`,
      icon: `/icon-rao-vat/icon-oto.png`,
      count: 1,
    },
    {
      title: `Nhắn tin, thông báo`,
      icon: `/icon-rao-vat/icon-nhan-tin.png`,
      count: 1,
    },
  ];
  const listMoi = [
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Nhận người giúp việc cho cửa hàng tại Praha.
                Công việc nhàn hạ, thù lao cao.
                Liên hệ anh Hải. sđt....`,
    },
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Tìm sinh viên phụ đạo kèm học sinh lớp 1`,
    },
    {
      date: `10/2/2024`,
      icon: `/icon-rao-vat/icon-viec-lam.png`,
      content: `Cần chuyển nhượng cửa hàng bán thực phẩm tại Praha.`,
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex items-center gap-2 p-4">
          <IconHome className="text-head-line" />
          <h1 className="text-head-line text-sm font-bold">Trang chủ</h1>
        </div>
        <div className="flex flex-col gap-1 md:flex-row">
          <div className="flex-1">
            <ThoiSu />
          </div>
          <div className="flex-1">
            <TinVan />
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row pb-10">
          <div className="flex-1">
            <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
              Kinh Doanh
            </div>

            <div className="px-4 py-2">
              <div className="text-head-line text-lg font-bold">Trao Đổi</div>
              <div className="flex gap-4 mt-1">
                <div className="flex-1">
                  <img src="/news-2.png" className="w-full" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="text-head-line-title text-xl font-bold">
                    Khó khăn và tương lai của những ngành nghề đặc trưng của
                    người Việt
                  </div>
                  <div className="text-head-line text-base font-bold">
                    <div>Chia sẻ: Hội Doanh Nghiệp Séc</div>
                  </div>
                  <div className="text-head-line text-base font-bold flex gap-3">
                    <div className="flex gap-2">
                      <MessageSquare />2
                    </div>
                    <div className="flex gap-2">
                      <Heart />
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
              Chuyên Mục
            </div>

            <div className="px-4 py-2">
              <div className="text-head-line text-lg font-bold">Thể Thao</div>
              <div className=" mt-1">
                <div className="flex-1 relative h-[300px]">
                  <img src="/golf.png" className="w-full h-full object-cover" />
                  <div className="absolute text-white font-bold bottom-2 right-2 text-xl md:text-[36px] md:bottom-5 md:right-12">
                    Những sân golf
                    <br /> đẹp nhất Châu Âu
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="flex-1">
                    <div className="text-head-line text-base font-bold flex gap-4">
                      <div className="flex gap-2">
                        <MessageSquare />2
                      </div>
                      <div className="flex gap-2">
                        <Heart />
                        430
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="text-head-line text-base font-bold">
                        <div>Chia sẻ: Hội Golf Châu Âu</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-section-high-light">
                  Chuyên mục đặc biệt Những sân golf đẹp nhất Châu Âu sẽ lần
                  lượt giới thiệu với các bạn những sân chơi golf được người
                  Việt yêu chuộng nhất tại Châu Âu. Dưới mỗi bài viết về các sân
                  cũng là nơi để những người đã từng đến chơi chia sẻ những trải
                  nghiệm của mình với mọi người...
                </div>
              </div>
            </div>

            <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
              Cộng Đồng
            </div>

            <div className="px-4 py-2">
              <div className="text-head-line text-lg font-bold">
                Sinh Hoạt Cộng Đồng
              </div>
              <div className="text-head-line text-[28px] font-bold mb-2">
                Tưng bừng ngày văn hoá Việt Nam tại Slovakia
              </div>
              <div className="">
                <div className="flex-1 relative h-[300px]">
                  <img
                    src="/news-3.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col mt-4 md:flex-row">
                  <div className="flex-1">
                    <div className="text-head-line text-base font-bold flex gap-4">
                      <div className="flex gap-2">
                        <MessageSquare />2
                      </div>
                      <div className="flex gap-2">
                        <Heart />
                        430
                      </div>
                    </div>
                  </div>
                  <div className="text-head-line mt-2 md:mt-0 text-base font-bold">
                    <div>Chia sẻ: Hội Người Việt Nam Slovakia</div>
                  </div>
                </div>
                <div className="mt-4 text-section-high-light">
                  Sự kiện Ngày Việt Nam tại Slovakia lần thứ 3 đã thu hút hơn
                  10.000 lượt người tham quan, trong đó phần lớn là người dân sở
                  tại. Đây là sự kiện quy mô lớn nhất từ trước tới nay do Đại sứ
                  quán Việt Nam tại Slovakia cùng cộng đồng người Việt Nam tổ
                  chức.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="advertise"></div>
            <div>
              <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
                KÊNH THÔNG TIN - RAO VẶT
              </div>
              <div className="mt-4 px-4">
                <div className="grid grid-cols-3 gap-2">
                  {listRaoVat.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="p-1 border-[1px] border-head-line relative flex gap-[1px] md:h-[115px] h-[140px]"
                      >
                        <div>
                          <img
                            src={item?.icon}
                            alt={item?.title}
                            className="w-[40px] "
                          />
                        </div>
                        <div className="text-head-line flex-1 pl-4 md:text-base text-xs font-bold">
                          {item?.title}
                        </div>
                        <div className=" absolute bottom-1 text-xs text-head-line right-1">
                          10
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-head-line font-bold mt-1">Mới</div>
                <div>
                  {listMoi.map((item: any, index: number) => {
                    return (
                      <div key={index} className="flex gap-2 mb-2">
                        <div className="w-[40px]">
                          <img src={item?.icon} alt="" className="w-full" />
                        </div>
                        <div className="flex-1">
                          <div className="text-head-line font-medium">
                            {item?.date}
                          </div>
                          <div className=" text-section-high-light">
                            {item?.content}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-1 items-center justify-end text-head-line cursor-pointer">
                  Xem tiếp <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
