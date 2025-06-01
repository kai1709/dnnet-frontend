'use client'
import { User } from '@/components/components/Header'
import IconReply from '@/components/components/icons/IconReply'
import IconViewReply from '@/components/components/icons/IconViewReply'
import Loading from '@/components/components/icons/Loading'
import LoadingWhite from '@/components/components/icons/LoadingWhite'
import { useUser } from '@/components/components/UserContext'
import { decrypt } from '@/components/lib/utils'
import { Button, Tabs, TabsProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ThumbsUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Reply from './Reply'

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
const Comments = ({ data }: { data: CommentType[] }) => {
  return (
    <div className='mb-4'>
      <Tabs defaultActiveKey='1' items={items} onChange={() => {}} />
      {data.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

const Comment = ({ comment }: { comment: CommentType }) => {
  const [showReply, setShowReply] = useState(false)
  const [isProcessingLike, setIsProcessingLike] = useState(false)
  const router = useRouter()
  // @ts-expect-error expected context
  const { user } = useUser()

  const handleLike = async () => {
    if (isProcessingLike) return
    setIsProcessingLike(true)
    const body = {
      user: user.id,
      comment: comment.id
    }

    const res = await axios.post('/api/likes', body)
    console.log({ res })
    router.refresh()
    setIsProcessingLike(false)
  }

  const isLikedByMe = comment.likes.find(like => like.user === user?.id)

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
            <div className={`flex cursor-pointer gap-1 ${isLikedByMe ? 'text-red-primary' : ''}`} onClick={handleLike}>
              {isProcessingLike ? (
                <Loading width='20' height='20' />
              ) : (
                <>
                  <ThumbsUp size={16} />
                  Thích
                </>
              )}
            </div>
            <div className='flex cursor-pointer items-center gap-1' onClick={() => setShowReply(true)}>
              <IconReply />
              Trả lời
            </div>
          </div>
        </div>
        {showReply && (
          <div className='border-border-color-2 mt-2 border-l-[1px] pl-2 pt-1'>
            {comment.replies?.map(reply => <Reply key={reply.id} reply={reply} />)}
            <ReplyInput id={comment.id} />
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

const ReplyInput = ({ id }: { id: number }) => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<User | null>(null)

  const router = useRouter()

  const loadUser = async () => {
    const cookie = Cookies.get('user')
    const session = await decrypt(cookie)
    if (session) {
      const userData = JSON.parse(session)
      setUserData(userData)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onSubmit = async () => {
    if (!value || isLoading) return
    setIsLoading(true)
    const body = {
      content: value,
      comment: id,
      author: userData?.id
    }

    await axios.post('/api/reply', body)
    setIsLoading(false)
    setValue('')
    router.refresh()
  }

  if (!userData) return null

  return (
    <>
      <div className='mb-4 mt-4 flex w-full rounded bg-gray-bg hover:bg-gray-bg'>
        <TextArea
          value={value}
          placeholder='Chia sẻ ý kiến của bạn'
          onChange={e => setValue(e.target.value)}
          className='h-[80px] border-[0px] bg-gray-bg outline-none hover:bg-gray-bg focus:bg-gray-bg'
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
