'use client'
import { User } from '@/components/components/Header'
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

export type Comment = {
  content: string
  id: number
  author: User
}
const Comments = ({ data }: { data: Comment[] }) => {
  return (
    <div className='mb-4'>
      <Tabs defaultActiveKey='1' items={items} onChange={() => {}} />
      {data.map(comment => (
        <div className='mb-2 mt-2 flex' key={comment.id}>
          <div className=''>
            <img
              src={comment.author?.avatar || '/user-avatar-1.png'}
              className='mr-2 h-[30px] w-[30px]'
              style={{ borderRadius: 45 }}
            />
          </div>
          <div className='px-4'>
            <div className='text-[14px] font-semibold text-text-primary'>{comment.author.display_name}</div>
            <div className='my-2 font-normal text-text-primary' style={{ fontWeight: 400 }}>
              {comment.content}
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
      ))}
    </div>
  )
}

export default Comments
