'use client'
import { ThumbsUp } from 'lucide-react'
import { CommentType } from './Comments'
import { useUser } from '@/components/components/UserContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '@/components/components/icons/Loading'

const Reply = ({ reply }: { reply: CommentType }) => {
  const [isProcessingLike, setIsProcessingLike] = useState(false)

  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(reply.likes.length)

  // @ts-expect-error expected context
  const { user } = useUser()

  const handleLike = async () => {
    if (isProcessingLike) return
    setIsProcessingLike(true)
    const body = {
      user: user.id,
      reply: reply.id
    }

    await axios.post('/api/likes', body)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
    setIsLiked(!isLiked)
    setIsProcessingLike(false)
  }

  useEffect(() => {
    if (user?.id) {
      const isLikedByMe = reply.likes.find(like => like.user === user?.id)
      setIsLiked(!!isLikedByMe)
    }
  }, [user?.id])


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
            {
              user?.id && (
                <div className={`flex items-center cursor-pointer gap-1 ${isLiked ? 'text-red-primary' : 'text-text-icon'}`} onClick={handleLike}>
                  {isProcessingLike ? (
                    <Loading width='20' height='20' />
                  ) : (
                    <>
                      <ThumbsUp size={16} />
                      Thích
                    </>
                  )}
                </div>
              )
            }
            {likesCount > 0 && (
              <div className='flex cursor-pointer items-center gap-1 text-red-primary items-center'>
                <ThumbsUp size={16} />
                {likesCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reply
