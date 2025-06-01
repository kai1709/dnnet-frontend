'use client'
import { User } from '@/components/components/Header'
import IconReply from '@/components/components/icons/IconReply'
import IconViewReply from '@/components/components/icons/IconViewReply'
import Loading from '@/components/components/icons/Loading'
import LoadingWhite from '@/components/components/icons/LoadingWhite'
import { useUser } from '@/components/components/UserContext'
import { Button, Tabs, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from 'axios'
import { ThumbsUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import Reply from './Reply'
import CommentInput from './CommentInput'

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

export type CommentType = {
  content: string
  id: number
  author: User
  replies: CommentType[]
  likes: Like[]
}

export type Like = {
  user: number
  comment: number
  reply: number
}
const Comments = ({ id }: { data: CommentType[], id: number }) => {
  const [tab, setTab] = useState('1')
  const [comments, setComments] = useState<CommentType[]>([])
  // @ts-expect-error expected context
  const { user } = useUser()

  const loadComments = async () => {
    const { data } = await axios.get(`/api/comment?id=${id}`)
    setComments(data.data.data)
  }

  const dataRender = tab === '1' ? comments : comments.filter(c => c.author.id === user?.id)

  useEffect(() => {
    loadComments()
  }, [])

  return (
    <>
      <CommentInput id={id} loadComments={loadComments} />
      <div className='mb-4'>
        <Tabs defaultActiveKey='1' items={items} onChange={(e) => { setTab(e) }} />
        {dataRender.map(comment => (
          <Comment key={comment.id} comment={comment} loadComments={loadComments} />
        ))}
      </div>
    </>
  )
}

const Comment = ({ comment, loadComments }: { comment: CommentType, loadComments: () => void }) => {
  const [showReply, setShowReply] = useState(false)
  const [isProcessingLike, setIsProcessingLike] = useState(false)
  // @ts-expect-error expected context
  const { user } = useUser()

  const handleLike = async () => {
    if (isProcessingLike) return
    setIsProcessingLike(true)
    const body = {
      user: user.id,
      comment: comment.id
    }

    await axios.post('/api/likes', body)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
    setIsLiked(!isLiked)
    setIsProcessingLike(false)
  }

  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(comment.likes.length)

  useEffect(() => {
    if (user?.id) {
      const isLikedByMe = comment.likes.find(like => like.user === user?.id)
      setIsLiked(!!isLikedByMe)
    }
  }, [user?.id])

  return (
    <div className='mb-4 mt-4 flex' key={comment.id}>
      <div className=''>
        <img
          src={comment.author?.avatar || '/user-avatar-1.png'}
          className='mr-2 h-[30px] w-[30px]'
          style={{ borderRadius: 45 }}
          alt='avatar'
        />
      </div>
      <div className='w-full px-2'>
        <div className='text-[14px] font-semibold text-text-primary'>{comment.author.display_name}</div>
        <div className='my-2 font-normal text-text-primary' style={{ fontWeight: 400 }}>
          {comment.content}
        </div>
        <div className='flex'>
          <div className='flex flex-1 items-center gap-2'>
            {user?.id && (
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
            )}
            <div className='flex cursor-pointer items-center gap-1 text-text-icon' onClick={() => setShowReply(true)}>
              <IconReply />
              Trả lời
            </div>
            {likesCount > 0 && (
              <div className='flex cursor-pointer items-center gap-1 text-red-primary items-center'>
                <ThumbsUp size={16} />
                {likesCount}
              </div>
            )}
          </div>
        </div>
        {showReply && (
          <div className='border-border-color-2 mt-2 border-l-[1px] pl-2 pt-1'>
            {comment.replies?.map(reply => <Reply key={reply.id} reply={reply} />)}
            <ReplyInput id={comment.id} loadComments={loadComments} />
          </div>
        )}
        {!showReply && comment.replies?.length > 0 && (
          <div className='mt-2 flex cursor-pointer gap-2 text-text-secondary' onClick={() => setShowReply(true)}>
            <IconViewReply />
            Trả lời ({comment.replies?.length})
          </div>
        )}
      </div>
    </div>
  )
}

const ReplyInput = ({ id, loadComments }: { id: number, loadComments: () => void }) => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // @ts-expect-error context user
  const { user } = useUser()

  const onSubmit = async () => {
    if (!value || isLoading) return
    setIsLoading(true)
    const body = {
      content: value,
      comment: id,
      author: user?.id
    }

    await axios.post('/api/reply', body)
    await loadComments()
    setIsLoading(false)
    setValue('')

  }

  if (!user?.id) return null

  return (
    <>
      <div className='mb-4 mt-4 flex w-full rounded bg-gray-bg hover:bg-gray-bg'>
        <TextArea
          value={value}
          placeholder='Chia sẻ ý kiến của bạn'
          onChange={e => setValue(e.target.value)}
          className='h-[80px] border-[0px] bg-gray-bg outline-none hover:bg-gray-bg focus:bg-gray-bg text-text-primary placeholder-text-primary'
          style={{ height: '80px' }}
        />
      </div>
      <div className='flex'>
        <div className='flex-1' />
        <div>
          <Button
            className='button-comment bg-red-primary text-white hover:bg-red-primary hover:text-white'
            onClick={onSubmit}
          >
            {isLoading ? <LoadingWhite /> : 'Gửi bình luận'}
          </Button>
        </div>
      </div>
    </>
  )
}

export default Comments
