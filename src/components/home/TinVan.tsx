import React from 'react'

const dsTinVan = [
  {
    label: `Reuters`,
    description: `Thuế mới của Trump với Canada và Mexico có thể đẩy giá thực phẩm Mỹ tăng cao, đặc biệt là thịt, rau và trứng.`
  },
  {
    label: `Rozhlas.cz`,
    description: `Thống đốc Ngân hàng Trung ương Séc, Aleš Michl, đề xuất kế hoạch mua Bitcoin vào dự trữ, có thể khiến ČNB trở thành ngân hàng trung ương phương Tây đầu tiên làm vậy. Tuy nhiên, nhà báo Petr Koubský cho rằng Bitcoin là tài sản mang tính đầu cơ cao và không phù hợp với vai trò ổn định tiền tệ của ngân hàng trung ương.`
  },
  {
    label: `Reuters`,
    description: `Giá nhà mới và nhà cũ tại Trung Quốc tiếp tục giảm trong tháng 1. Theo China Index Academy, giá nhà cũ giảm hơn 7% so với cùng kỳ năm trước, trong khi doanh số bán bất động sản của 100 tập đoàn hàng đầu giảm gần 17%.`
  },
  {
    label: `Reuters`,
    description: `Thuế quan của Trump trong nhiệm kỳ đầu đã gây ra chiến tranh thương mại, ảnh hưởng lớn đến doanh nghiệp Trung Quốc. Với Trump trở lại Nhà Trắng, các doanh nghiệp Trung Quốc đang lo lắng về tác động tiếp theo. Trung Quốc đang chuẩn bị đối phó với các chính sách thuế quan mới.`
  }
]

const TinVan = () => {
  return (
    <div>
      <div className='bg-section-header-background p-4 text-lg font-bold text-section-header'>TIN VẮN</div>
      <div className='bg-section-border'>
        {dsTinVan.map((item: { label: string; description: string }, index: number) => {
          return (
            <div
              key={index}
              className='flex items-center gap-1 border-t-[2px] border-t-head-line px-4 py-4 font-medium'
            >
              <div className='w-[30%] text-head-line'>{item?.label}</div>
              <div className='flex-1 text-section-high-light'>{item?.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TinVan
