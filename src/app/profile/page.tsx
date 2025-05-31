'use client'
import { User } from '@/components/components/Header'
import IconFacebook from '@/components/components/icons/IconFacebook'
import IconGoogle from '@/components/components/icons/IconGoogle'
import IconLogout from '@/components/components/icons/IconLogout'
import LoadingWhite from '@/components/components/icons/LoadingWhite'
import HomeHeader from '@/components/home/HomeHeader'
import { decrypt, encrypt } from '@/components/lib/utils'
import { Flex, Input, Radio, Select } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CircleUser, Pencil, Plus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const GENDERS = [{
  label: 'Nam',
  value: 'male'
}, {
  label: 'Nữ',
  value: 'female'
}, {
  label: 'Khác',
  value: 'other'
}]


const COUNTRIES = [{
  label: 'Việt Nam',
  value: 'vn'
}, {
  label: 'Czech',
  value: 'cz'
}, {
  label: 'Slovakia',
  value: 'sk'
}, {
  label: 'Ba Lan',
  vale: 'pl'
}]
const Profile = () => {
  const [isEditting, setIsEditting] = useState(false)
  const [userData, setUserData] = useState<User | null>(null)
  const [fullName, setFullName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [profileUrl, setProfileUrl] = useState('')
  const [gender, setGender] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [country, setCountry] = useState('')

  const [isLoading, setIsloading] = useState(false)
  const path = usePathname()
  const router = useRouter()
  const loadUser = async () => {
    const cookie = Cookies.get('user')
    const session = await decrypt(cookie)
    if (session) {
      const userData = JSON.parse(session)
      setUserData(userData)
      setFullName(userData.full_name)
      setDisplayName(userData.display_name)
      setJobTitle(userData.job_title)
      setProfileUrl(userData.profile_url)
      setGender(userData.gender)
      setMobileNumber(userData.mobile_number)
      setCountry(userData.country)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  const handleLogout = () => {
    Cookies.remove('user')
    setUserData(null)
    if (path.includes('profile')) {
      router.push('/')
    }
  }

  const onSubmit = async () => {
    const body = {
      full_name: fullName,
      dislay_name: displayName,
      job_title: jobTitle,
      profile_url: profileUrl,
      gender,
      mobile_number: mobileNumber,
      country
    }

    setIsloading(true)
    const res = await axios.patch(`/api/user/${userData?.id}`, body)
    const newUserData = res.data.data
    setUserData(newUserData.data)
    const encryptedSessionData = encrypt(newUserData.data)

    await Cookies.set('user', encryptedSessionData, { expires: 7 });
    setFullName(newUserData.data.full_name)
    setDisplayName(newUserData.data.display_name)
    setJobTitle(newUserData.data.job_title)
    setProfileUrl(newUserData.data.profile_url)
    setGender(newUserData.data.gender)
    setMobileNumber(newUserData.data.mobile_number)
    setCountry(newUserData.data.country)
    setIsEditting(false)
    setIsloading(false)
  }

  console.log({ userData })

  const props = {
    accept: '.png,.jpg,.jpeg',
    beforeUpload: () => {
      return false
    }
  }

  return (
    <>
      <div className='inline-flex w-full items-start justify-start gap-5 self-stretch px-6 pb-20 pt-8'>
        <div
          className='flex-1 border-[1px] border-border-color-2 rounded p-[20px]'
        >
          <div className='flex gap-2.5 items-center pb-[10px] border-b-[1px] border-border-color-2'>
            <div data-type='Initials' data-variants='15' className='flex h-8 w-8 items-start justify-start'>
              <CircleUser size={32} />
            </div>
            <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
              {userData?.display_name}
            </div>
          </div>
          <div className='py-[10px] border-b-[1px] border-border-color-2'>
            <div className='w-full flex gap-2 py-[10px] items-center cursor-pointer justify-center bg-red-primary text-white' style={{ borderRadius: 8 }}>
              Tạo Tin <Plus />
            </div>
          </div>
          <div className='py-[12px] border-b-[1px] border-border-color-2'>
            <div className='flex text-[14px] font-semibold items-center justify-start'>
              <div className="text-red-primary">
                Thông tin chung
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Trang Thành viên
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Danh sách tổ chức/ công ty
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Danh sách thành viên
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Kết nối DNNet

              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Bài viết
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Thông báo/ quảng cáo
              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="">
                Tin đã chia sẻ

              </div>
            </div>
            <div className='flex text-[14px] pt-[10px] items-center justify-start'>
              <div className="flex-1">
                Bình luận của bạn
              </div>
              <div className=''>
                2
              </div>
            </div>
          </div>
          <div className='inline-flex items-center justify-start gap-1.5 pt-[10px]'>
            <div className='flex gap-2 items-center text-[14px] py-2' onClick={() => handleLogout()}>
              Thoát
              <IconLogout />
            </div>
          </div>
        </div>
        <div className='w-full flex-[2]'>
          <HomeHeader title='THÔNG TIN CHUNG' />
          <Flex className='py-[20px]' gap="middle">
            <Radio.Group defaultValue="a">
              <Radio value="a">Cá nhân</Radio>
              <Radio value="b">Tổ chức</Radio>
              <Radio value="c">Công ty</Radio>
            </Radio.Group>
          </Flex>
          <div className='border-[1px] border-border-color-2' style={{ borderRadius: 8 }}>
            <div className='bg-gray-bg py-[20px] px-[15px] flex items-center'>
              <div className="flex-1 font-semibold text-[16px] text-text-primary">
                Thông tin tài khoản
              </div>
              {
                isEditting ? (
                  <div className='flex gap-2'>
                    <div className='py-[8px] px-[12px] text-[12px] border-[1px] border-[#111827] cursor-pointer' onClick={() => {
                      if (isLoading) return
                      setIsEditting(false)
                    }} style={{ borderRadius: 8 }}>Hủy</div>
                    <div className="bg-red-primary text-white py-[8px] text-[12px] cursor-pointer px-[12px] font-normal" style={{ borderRadius: 8 }} onClick={onSubmit}>
                      {isLoading ? <LoadingWhite /> : 'Lưu'}
                    </div>
                  </div>
                ) : (

                  <div className='flex items-center justify-start gap-1.5  text-text-secondary cursor-pointer' onClick={() => setIsEditting(true)}>
                    <div className="justify-start font-['Inter'] text-text-secondary font-normal text-[16px]">
                      Cập Nhật
                    </div>
                    <Pencil size={18} />
                  </div>

                )
              }
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div className='flex flex-col items-start justify-start gap-2 self-stretch'>
                <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                  Ảnh đại diện
                </div>

                <div className='flex items-center'>
                  <div className='w-[90px] h-[90px] flex items-center justify-center border-[1px] border-border-color-2' style={{ borderRadius: 45 }}>
                    <img src={userData?.avatar || '/user-avatar-1.png'} className='w-[60px] h-[60px]' style={{ borderRadius: 45 }} />
                  </div>
                  {isEditting && (
                    <div className='flex gap-2 pl-4'>
                      <div className="bg-red-primary text-white py-[10px] text-[14px] cursor-pointer px-[12px]" style={{ borderRadius: 8 }}>
                        Thay Ảnh Đại Diện
                      </div>
                      <div className="bg-gray-bg text-text-primary py-[10px] text-[14px] cursor-pointer px-[12px]" style={{ borderRadius: 8 }}>
                        Xóa Ảnh
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='grid grid-cols-[1] md:grid-cols-2 w-full gap-4'>
                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Họ và tên
                  </div>
                  {isEditting ? (
                    <Input className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} value={fullName} onChange={(e: any) => setFullName(e.target.value)} />
                  ) : (
                    <>
                      {
                        userData?.full_name ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.full_name}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>
                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Biệt hiệu
                  </div>
                  {isEditting ? (
                    <Input value={displayName} className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} onChange={(e) => setDisplayName(e.target.value)} />
                  ) : (
                    <>
                      {
                        userData?.display_name ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.display_name}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>
                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Chức danh công việc
                  </div>
                  {isEditting ? (
                    <Input value={jobTitle} className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} onChange={(e) => setJobTitle(e.target.value)} />
                  ) : (
                    <>
                      {
                        userData?.job_title ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.job_title}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>

                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Email
                  </div>
                  {isEditting ? (
                    <Input defaultValue={userData?.email} disabled className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} />
                  ) : (
                    <>
                      {
                        userData?.email ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.email}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>


                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Link hồ sơ
                  </div>
                  {isEditting ? (
                    <Input value={profileUrl} className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} onChange={(e) => setProfileUrl(e.target.value)} />
                  ) : (
                    <>
                      {
                        userData?.profile_url ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.profile_url}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>


                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Giới tính
                  </div>
                  {isEditting ? (
                    <Select options={GENDERS} value={gender} onChange={(val) => setGender(val)} className='w-full' />
                  ) : (
                    <>
                      {
                        userData?.gender ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{GENDERS.find(a => a.value === userData.gender)?.label}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>

                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Số điện thoại
                  </div>
                  {isEditting ? (
                    <Input value={mobileNumber} className='p-[12px] bg-gray-bg' style={{ lineHeight: '14px' }} onChange={(e) => setMobileNumber(e.target.value)} />
                  ) : (
                    <>
                      {
                        userData?.mobile_number ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{userData.mobile_number}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>

                <div className='mb-4'>
                  <div className="text-text-primary justify-start text-[16px] font-semibold mb-2" >
                    Nước
                  </div>
                  {isEditting ? (
                    <Select options={COUNTRIES} value={country} onChange={(val) => setCountry(val)} className='w-full' />
                  ) : (
                    <>
                      {
                        userData?.country ? (
                          <div className='p-[12px] bg-gray-bg w-full rounded-xl text-[14px] font-normal'>{COUNTRIES.find(a => a.value === userData.country)?.label}</div>
                        ) : (
                          <div className='text-red-primary'>Chưa có thông tin</div>
                        )
                      }
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-border-color-2 mt-8' style={{ borderRadius: 8 }}>
            <div className='bg-gray-bg py-[20px] px-[15px] flex'>
              <div className="flex-1 font-semibold text-[16px] text-text-primary">
                Liên kết mạng xã hội
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='flex items-center justify-start gap-2'>
                  <IconGoogle />
                  <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                    Google
                  </div>
                </div>
                <div
                  data-size='Medium'
                  data-state='Default'
                  data-type='Neutral'
                  className='inline-flex flex-col items-start justify-start'
                >
                  <div className='bg-Color-Neutral-Neutral---100 flex flex-col items-center justify-start gap-2 self-stretch rounded-lg px-3 py-2.5'>
                    <div
                      data-show-content='true'
                      data-size='14 px'
                      data-icon-left='false'
                      data-icon-right='false'
                      className='inline-flex items-center justify-center gap-2'
                    >
                      <div className="bg-gray-bg text-text-primary py-[10px] text-[14px] cursor-pointer px-[12px]" style={{ borderRadius: 8 }}>
                        Ngắt kết nối
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='flex items-center justify-start gap-2'>
                  <IconFacebook />
                  <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                    Facebook
                  </div>
                </div>
                <div
                  data-size='Medium'
                  data-state='Default'
                  data-type='Solid'
                  className='inline-flex flex-col items-start justify-start'
                >
                  <div className='bg-Color-Primary-500 flex flex-col items-center justify-start gap-2 self-stretch rounded-lg px-3 py-2.5'>
                    <div
                      data-show-content='true'
                      data-size='14 px'
                      data-icon-left='false'
                      data-icon-right='false'
                      className='inline-flex items-center justify-center gap-2'
                    >
                      <div className="bg-red-primary text-white py-[10px] text-[14px] cursor-pointer px-[12px]" style={{ borderRadius: 8 }}>
                        Kết nối
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-border-color-2 mt-8' style={{ borderRadius: 8 }}>
            <div className='bg-gray-bg py-[20px] px-[15px] flex'>
              <div className="flex-1 font-semibold text-[16px] text-text-primary">
                Tài khoản
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div
                className='flex flex-col items-start justify-start'
              >
                <div className="bg-red-primary text-white py-[10px] text-[14px] cursor-pointer px-[12px]" style={{ borderRadius: 8 }}>
                  Xóa Tài Khoản
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
