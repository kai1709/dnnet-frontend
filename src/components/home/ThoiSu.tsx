import { Col, Row } from "antd";
import { Heart, MessageSquare } from "lucide-react";
import React from "react";

const ThoiSu = () => {
  return (
    <div className="flex-1 pb-4">
      <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
        THỜI SỰ
      </div>
      <div className="px-4 py-2">
        <div className="text-head-line text-lg font-bold">Châu Âu</div>
        <div className="flex gap-4">
          <div className="h-[200px] flex-1">
            <img src="/news.png" style={{ width: "100%" }} />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="text-head-line-title text-xl font-bold">
              Greenland giàu tài nguyên khoáng sản. Nơi đây có đất hiếm, dầu mỏ
              và vàng.
            </div>
            <div className="text-head-line text-base font-bold">
              <div>Nguồn: iDnes.cz</div>
              <div>Chia sẻ: AI</div>
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
      <Row gutter={[12, 12]} className="px-4 mt-4">
        <Col span={8}>
          <div className="text-head-line text-lg font-bold">CH Séc</div>
          <img src="/news.png" style={{ width: "100%" }} />
          <div className="text-section-high-light py-4">
            Chính phủ của Thủ tướng Petr Fiala bị chỉ trích vì chi hai triệu
            korun cho việc đón tiếp phái đoàn Việt Nam tại khách sạn sang trọng.
          </div>
          <div className="text-head-line text-base font-bold mb-4">
            <div>Nguồn: iDnes.cz</div>
            <div>Chia sẻ: AI</div>
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
        </Col>
        <Col span={8}>
          <div className="text-head-line text-lg font-bold">CH Séc</div>
          <img src="/news.png" style={{ width: "100%" }} />
          <div className="text-section-high-light py-4">
            Chính phủ của Thủ tướng Petr Fiala bị chỉ trích vì chi hai triệu
            korun cho việc đón tiếp phái đoàn Việt Nam tại khách sạn sang trọng.
          </div>
          <div className="text-head-line text-base font-bold mb-4">
            <div>Nguồn: iDnes.cz</div>
            <div>Chia sẻ: AI</div>
          </div>
          <div
            className="text-head-line text-base font-bold flex"
            style={{ gap: 20 }}
          >
            <div className="flex" style={{ gap: 6 }}>
              <MessageSquare />
              28
            </div>
            <div className="flex" style={{ gap: 6 }}>
              <Heart />
              129
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="text-head-line text-lg font-bold">CH Séc</div>
          <img src="/news.png" style={{ width: "100%" }} />
          <div className="text-section-high-light py-4">
            Chính phủ của Thủ tướng Petr Fiala bị chỉ trích vì chi hai triệu
            korun cho việc đón tiếp phái đoàn Việt Nam tại khách sạn sang trọng.
          </div>
          <div className="text-head-line text-base font-bold mb-4">
            <div>Nguồn: iDnes.cz</div>
            <div>Chia sẻ: AI</div>
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
        </Col>
      </Row>
    </div>
  );
};

export default ThoiSu;
