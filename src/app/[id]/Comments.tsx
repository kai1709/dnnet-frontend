'use client'
import IconReply from '@/components/components/icons/IconReply'
import { Tabs, TabsProps } from 'antd'
import { Flag, ThumbsUp } from 'lucide-react'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tất cả bình luận',
    children: ''
  },
  {
    key: '2',
    label: 'Bình luận của tôi',
    children: ''
  }
]

const Comments = () => {
  return (
    <div className='mb-4'>
      <Tabs defaultActiveKey='1' items={items} onChange={() => {}} />
      <div className='mb-2 mt-2 flex'>
        <div className=''>
          <img src='/Avatar.png' />
        </div>
        <div className='px-4'>
          <div className='text-[14px] font-semibold text-text-primary'>Mỹ Sơn</div>
          <div className='my-2 font-normal text-text-primary' style={{ fontWeight: 400 }}>
            Hi vọng mọi thứ tốt hơn
          </div>
          <div className='flex'>
            <div className='flex flex-1 items-center gap-2'>
              <div className='flex gap-1'>
                <ThumbsUp size={16} />
                Thích
              </div>
              <div className='flex items-center gap-1'>
                <IconReply />
                Trả lời
              </div>
              <div>
                <Flag size={16} />
              </div>
              <div className='flex items-center gap-1'>
                <ThumbsUp size={16} className='text-red-primary' />
                50
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-2 mt-2 flex'>
        <div className=''>
          <img src='/Avatar.png' />
        </div>
        <div className='px-4'>
          <div className='text-[14px] font-semibold text-text-primary'>Mỹ Sơn</div>
          <div className='my-2 font-normal text-text-primary'>Hi vọng mọi thứ tốt hơn</div>
          <div className='flex'>
            <div className='flex flex-1 items-center gap-2'>
              <div className='flex gap-1'>
                <ThumbsUp size={16} />
                Thích
              </div>
              <div className='flex items-center gap-1'>
                <IconReply />
                Trả lời
              </div>
              <div>
                <Flag size={16} />
              </div>
              <div className='flex items-center gap-1'>
                <ThumbsUp size={16} className='text-red-primary' />
                50
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-2 mt-2 flex'>
        <div className=''>
          <img src='/Avatar.png' />
        </div>
        <div className='px-4'>
          <div className='text-[14px] font-semibold text-text-primary'>Mỹ Sơn</div>
          <div className='my-2 font-normal text-text-primary'>Hi vọng mọi thứ tốt hơn</div>
          <div className='flex'>
            <div className='flex flex-1 items-center gap-2'>
              <div className='flex gap-1'>
                <ThumbsUp size={16} />
                Thích
              </div>
              <div className='flex items-center gap-1'>
                <IconReply />
                Trả lời
              </div>
              <div>
                <Flag size={16} />
              </div>
              <div className='flex items-center gap-1'>
                <ThumbsUp size={16} className='text-red-primary' />
                50
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
