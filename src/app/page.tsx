import IconHome from "@/components/components/icons/IconHome";
import ThoiSu from "@/components/home/ThoiSu";
import TinVan from "@/components/home/TinVan";
import { Card, Col, Row } from "antd";
import {
  Briefcase,
  Car,
  HandCoins,
  Heart,
  House,
  Mails,
  MessageSquare,
  Notebook,
  ShoppingCart,
  Store,
  Utensils,
} from "lucide-react";

const HomePage = () => {
  return (
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
      <Row>
        <Col lg={12} md={24}>
          <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
            Kinh Doanh
          </div>

          <div className="px-4 py-2">
            <div className="text-head-line text-lg font-bold">Trao Đổi</div>
            <div className="flex gap-4">
              <div className="flex-1">
                <img src="/news-2.png" style={{ width: "100%" }} />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="text-head-line-title text-xl font-bold">
                  Khó khăn và tương lai của những ngành nghề đặc trưng của người
                  Việt
                </div>
                <div className="text-head-line text-base font-bold">
                  <div>Chia sẻ: Hội Doanh Nghiệp Séc</div>
                </div>
                <div
                  className="text-head-line text-base font-bold flex"
                  style={{ gap: 20 }}
                >
                  <div className="flex" style={{ gap: 6 }}>
                    <MessageSquare />2
                  </div>
                  <div className="flex" style={{ gap: 6 }}>
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
            <div className="">
              <div
                className="flex-1 h-[300px]"
                style={{ position: "relative" }}
              >
                <img
                  src="/golf.png"
                  style={{ width: "100%", height: 300, objectFit: "cover" }}
                />
                <div
                  className="absolute text-white font-bold text-[36px]"
                  style={{ top: 180, right: 50 }}
                >
                  Những sân golf
                  <br /> đẹp nhất Châu Âu
                </div>
              </div>
              <div className="flex mt-4">
                <div className="flex-1">
                  <div
                    className="text-head-line text-base font-bold flex"
                    style={{ gap: 20 }}
                  >
                    <div className="flex" style={{ gap: 6 }}>
                      <MessageSquare />2
                    </div>
                    <div className="flex" style={{ gap: 6 }}>
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
                Chuyên mục đặc biệt Những sân golf đẹp nhất Châu Âu sẽ lần lượt
                giới thiệu với các bạn những sân chơi golf được người Việt yêu
                chuộng nhất tại Châu Âu. Dưới mỗi bài viết về các sân cũng là
                nơi để những người đã từng đến chơi chia sẻ những trải nghiệm
                của mình với mọi người...
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
              <div
                className="flex-1 h-[300px]"
                style={{ position: "relative" }}
              >
                <img
                  src="/news-3.png"
                  style={{ width: "100%", height: 300, objectFit: "cover" }}
                />
              </div>
              <div className="flex mt-4">
                <div className="flex-1">
                  <div
                    className="text-head-line text-base font-bold flex"
                    style={{ gap: 20 }}
                  >
                    <div className="flex" style={{ gap: 6 }}>
                      <MessageSquare />2
                    </div>
                    <div className="flex" style={{ gap: 6 }}>
                      <Heart />
                      430
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="text-head-line text-base font-bold">
                      <div>Chia sẻ: Hội Người Việt Nam Slovakia</div>
                    </div>
                  </div>
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
        </Col>
        <Col lg={12} md={24}>
          <div className="advertise"></div>
          <div>
            <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
              KÊNH THÔNG TIN - RAO VẶT
            </div>
            <Row gutter={[12, 12]} className="mt-4 px-4">
              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <House size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Nhà cửa, đất đai
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Briefcase size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Việc làm
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <HandCoins size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Dịch vụ
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Store size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Nơi kinh doanh
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Utensils size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Ẩm thực
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Notebook size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Trang thiết bị cửa hàng, văn phòng
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <ShoppingCart size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Mua bán, kinh doanh
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Car size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Ô tô, xe máy, xe đạp
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card className="cursor-pointer">
                  <div
                    className="flex min-h-[100px] text-head-line"
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Mails size={40} />
                    </div>
                    <div className="text-head-line flex-1 pl-4 font-bold">
                      Nhắn tin, thông báo
                    </div>
                    <div
                      className="absolute flex"
                      style={{ bottom: -10, right: -4, gap: 6 }}
                    >
                      <MessageSquare /> 10
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
