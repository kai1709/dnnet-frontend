'use client'
import { User } from '@/components/components/Header'
import LoadingWhite from '@/components/components/icons/LoadingWhite'
import { decrypt } from '@/components/lib/utils'
import { Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const CommentInput = ({ id }: { id: string }) => {
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
      news_id: id,
      author: userData?.id
    }

    const res = await axios.post('/api/comment', body)
    console.log({ res })
    setIsLoading(false)
    setValue('')
    router.refresh()
  }

  if (!userData) return null

  return (
    <>
      <div className='text-[18px] font-semibold text-text-primary'>Bình luận</div>
      <div className='mb-4 mt-4 flex w-full rounded bg-gray-bg hover:bg-gray-bg'>
        <TextArea
          value={value}
          placeholder='Chia sẻ ý kiến của bạn'
          onChange={e => setValue(e.target.value)}
          className='border-[0px] bg-gray-bg outline-none hover:bg-gray-bg focus:bg-gray-bg'
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

export default CommentInput
