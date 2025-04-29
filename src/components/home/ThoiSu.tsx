import React from 'react'

const ThoiSu = () => {
  return (
    <div className='flex-1'>
      <div className='text-section-header bg-section-header-background p-4 text-lg font-bold'>THỜI SỰ</div>
      <div className='px-4 py-2'>
        <div className='text-head-line text-lg font-bold'>Châu Âu</div>
        <div className='flex gap-4'>
          <div className='h-[200px] flex-1'>IMAGE</div>
          <div className='flex flex-1 flex-col justify-between'>
            <div className='text-head-line-title text-xl font-bold'>
              Greenland giàu tài nguyên khoáng sản. Nơi đây có đất hiếm, dầu mỏ và vàng.
            </div>
            <div className='text-head-line text-base font-bold'>
              <div>Nguồn: iDnes.cz</div>
              <div>Chia sẻ: AI</div>
            </div>
            <div className='text-head-line text-base font-bold'>2/10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThoiSu
