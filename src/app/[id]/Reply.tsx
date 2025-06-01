import { ThumbsUp } from 'lucide-react'
import { CommentType } from './Comments'

const Reply = ({ reply }: { reply: CommentType }) => {
  return (
    <div className='mt-4 flex' key={reply.id}>
      <div className=''>
        <img
          src={reply.author?.avatar || '/user-avatar-1.png'}
          className='mr-2 h-[30px] w-[30px]'
          style={{ borderRadius: 45 }}
          alt='avatar'
        />
      </div>
      <div className='w-full px-2' key={reply.id}>
        <div className='text-[14px] font-semibold text-text-primary'>{reply.author.display_name}</div>
        <div className='my-2 font-normal text-text-primary' style={{ fontWeight: 400 }}>
          {reply.content}
        </div>
        <div className='flex'>
          <div className='flex flex-1 items-center gap-2'>
            <div className='flex cursor-pointer gap-1'>
              <ThumbsUp size={16} />
              Thích
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reply
