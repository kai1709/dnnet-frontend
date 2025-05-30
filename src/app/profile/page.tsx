import HomeHeader from '@/components/home/HomeHeader'

const Profile = () => {
  return (
    <>
      <div className='inline-flex w-full items-start justify-start gap-5 self-stretch px-6 pb-20 pt-8'>
        <div
          data-property-1='Default'
          className='outline-Color-Shape-Border-2 inline-flex w-64 w-full flex-col items-start justify-start gap-2.5 rounded p-5 outline outline-1 outline-offset-[-1px]'
        >
          <div className='inline-flex items-start justify-start gap-2.5 self-stretch'>
            <div
              data-check-status='false'
              data-removable='false'
              data-size='32'
              className='flex items-start justify-start rounded-[64px]'
            >
              <div data-type='Initials' data-variants='15' className='flex h-8 w-8 items-start justify-start'>
                <img className='flex-1 self-stretch rounded-[64px]' src='https://placehold.co/32x32' />
              </div>
            </div>
            <div className='inline-flex flex-1 flex-col items-start justify-center gap-1'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                Mạnh Sơn
              </div>
              <div className="text-Color-Text-Secondary justify-start self-stretch font-['Inter'] text-xs font-normal leading-none">
                Chủ tịch HDN Séc
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 h-0 self-stretch outline outline-1 outline-offset-[-0.50px]'></div>
          <div
            data-size='Medium'
            data-state='Default'
            data-type='Solid'
            className='flex flex-col items-start justify-start self-stretch'
          >
            <div className='bg-Color-Primary-500 flex flex-col items-center justify-start gap-2 self-stretch rounded-lg px-3 py-2.5'>
              <div
                data-show-content='true'
                data-size='14 px'
                data-icon-left='false'
                data-icon-right='true'
                className='inline-flex items-center justify-center gap-2'
              >
                <div className='flex items-center justify-center gap-2'>
                  <div className="text-Color-Text-Tertiary justify-start font-['Inter'] text-sm font-medium leading-tight">
                    Tạo Tin
                  </div>
                </div>
                <div className='relative h-5 w-5 overflow-hidden'>
                  <div className='bg-Color-Text-Primary border-Color-Text-w-color-background absolute left-[3.33px] top-[3.33px] h-3.5 w-3.5 border' />
                </div>
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 h-0 self-stretch outline outline-1 outline-offset-[-0.50px]'></div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Active'
            className='inline-flex w-56 items-center justify-between py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Red-text justify-start font-['Inter'] text-sm font-semibold leading-tight">
                Thông tin chung
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Trang Thành viên
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Danh sách tổ chức/ công ty
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Danh sách thành viên
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Kết nối DNNet
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Bài viết
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-start gap-2.5 py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Thông báo/ quảng cáo
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='false'
            data-type='Default'
            className='inline-flex w-56 items-center justify-between py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Tin đã chia sẻ
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5' />
          </div>
          <div
            data-show-icon='false'
            data-show-left-icon='false'
            data-show-number='true'
            data-type='Default'
            className='inline-flex w-56 items-center justify-between py-0.5'
          >
            <div className='flex w-28 items-center justify-start gap-1.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
                Bình luận của bạn
              </div>
            </div>
            <div className='flex items-center justify-start gap-2.5'>
              <div className="text-Color-Text-Secondary justify-start font-['Inter'] text-sm font-semibold leading-tight">
                2
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 h-0 self-stretch outline outline-1 outline-offset-[-0.50px]'></div>
          <div className='inline-flex items-center justify-start gap-1.5'>
            <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-normal leading-tight">
              Thoát
            </div>
            <div className='relative h-5 w-5 overflow-hidden'>
              <div className='bg-Color-Text-Error-Icon absolute left-[12.50px] top-[5px] h-1.5 w-1.5' />
              <div className='bg-Color-Text-Error-Icon absolute left-[12.50px] top-[9.17px] h-1.5 w-1.5' />
              <div className='bg-Color-Text-Error-Icon absolute left-[1.67px] top-[1.67px] h-4 w-4' />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <HomeHeader title='THÔNG TIN CHUNG' />
          <div className='inline-flex items-start justify-start gap-7'>
            <div
              data-dark-mode='False'
              data-show-avatar='false'
              data-show-checkbox='true'
              data-show-helper='false'
              data-show-icon-left='false'
              data-show-icon-right='false'
              data-show-label='true'
              data-state='Checked'
              className='flex items-center justify-start gap-2 rounded-lg'
            >
              <div data-state='Checked' className='relative h-6 w-6'>
                <div className='border-Color-Primary-500 absolute left-[4px] top-[4px] h-4 w-4 rounded-full border-[1.50px]' />
                <div className='bg-Color-Primary-500 absolute left-[8px] top-[8px] h-2 w-2 rounded-full' />
              </div>
              <div className='inline-flex flex-col items-start justify-start gap-0.5'>
                <div className="text-Color-Text-Red-text justify-center font-['Inter'] text-sm font-medium leading-tight">
                  Cá nhân
                </div>
              </div>
            </div>
            <div
              data-dark-mode='False'
              data-show-avatar='false'
              data-show-checkbox='true'
              data-show-helper='false'
              data-show-icon-left='false'
              data-show-icon-right='false'
              data-show-label='true'
              data-state='Initial'
              className='flex items-center justify-start gap-2 rounded-lg'
            >
              <div data-state='Default' className='relative h-6 w-6'>
                <div className='border-Color-Text-Secondary absolute left-[4px] top-[4px] h-4 w-4 rounded-full border-[1.50px] bg-white' />
              </div>
              <div className='inline-flex flex-col items-start justify-start gap-0.5'>
                <div className="text-Color-Text-Primary justify-center font-['Inter'] text-sm font-normal leading-tight">
                  Tổ chức
                </div>
              </div>
            </div>
            <div
              data-dark-mode='False'
              data-show-avatar='false'
              data-show-checkbox='true'
              data-show-helper='false'
              data-show-icon-left='false'
              data-show-icon-right='false'
              data-show-label='true'
              data-state='Initial'
              className='flex items-center justify-start gap-2 rounded-lg'
            >
              <div data-state='Default' className='relative h-6 w-6'>
                <div className='border-Color-Text-Secondary absolute left-[4px] top-[4px] h-4 w-4 rounded-full border-[1.50px] bg-white' />
              </div>
              <div className='inline-flex flex-col items-start justify-start gap-0.5'>
                <div className="text-Color-Text-Primary justify-center font-['Inter'] text-sm font-normal leading-tight">
                  Công ty
                </div>
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 flex flex-col items-start justify-start self-stretch rounded-lg outline outline-1'>
            <div className='bg-Color-Shape-Background-1 border-Color-Shape-Border-2 inline-flex h-14 items-center justify-between self-stretch rounded-tl-lg rounded-tr-lg border-b px-5 py-2.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                Thông tin tài khoản
              </div>
              <div className='flex items-center justify-start gap-1.5'>
                <div className="text-Color-Text-Secondary justify-start font-['Inter'] text-base font-normal leading-normal">
                  Cập Nhật
                </div>
                <div className='relative h-5 w-5 overflow-hidden'>
                  <div className='bg-Color-Text-Secondary absolute left-[14.17px] top-[0.83px] h-[5px] w-[5px]' />
                  <div className='bg-Color-Text-Secondary absolute left-[0.83px] top-[3.33px] h-4 w-4' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div className='flex flex-col items-start justify-start gap-2 self-stretch'>
                <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                  Ảnh đại diện
                </div>
                <div className='inline-flex items-center justify-start gap-9 self-stretch'>
                  <div className='outline-Color-Shape-Border-2 relative h-24 w-24 overflow-hidden rounded-[80px] outline outline-1 outline-offset-[-1px]'>
                    <div
                      data-check-status='false'
                      data-removable='false'
                      data-size='56'
                      className='outline-Color-Surface-Background---Widget absolute left-[15px] top-[15px] inline-flex h-14 w-14 items-start justify-start rounded-[64px] outline outline-2'
                    >
                      <div
                        data-type='Initials'
                        data-variants='15'
                        className='flex flex-1 items-start justify-start self-stretch'
                      >
                        <img className='flex-1 self-stretch rounded-[64px]' src='https://placehold.co/60x60' />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
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
                          <div className='flex items-center justify-center gap-2'>
                            <div className="text-Color-Text-Tertiary justify-start font-['Inter'] text-sm font-medium leading-tight">
                              Thay Ảnh Đại Diện
                            </div>
                          </div>
                        </div>
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
                          <div className='flex items-center justify-center gap-2'>
                            <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-medium leading-tight">
                              Xóa Ảnh
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                  <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                    Họ và tên
                  </div>
                  <div className="text-Color-Text-Red-text justify-start self-stretch font-['Inter'] text-sm font-normal leading-tight">
                    Chưa có thông tin
                  </div>
                </div>
                <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                  <div className='inline-flex items-center justify-start gap-1.5 self-stretch'>
                    <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                      Biệt hiệu
                    </div>
                    <div className='relative h-5 w-5 overflow-hidden'>
                      <div className='bg-Color-Text-Icon-3 absolute left-[0.83px] top-[0.83px] h-5 w-5' />
                      <div className='bg-Color-Text-Icon-3 absolute left-[9.17px] top-[9.17px] h-[5px] w-[1.67px]' />
                      <div className='bg-Color-Text-Icon-3 absolute left-[9.17px] top-[5.83px] h-[1.67px] w-[1.68px]' />
                    </div>
                  </div>
                  <div
                    data-size='Large'
                    data-state='Default'
                    className='flex flex-col items-start justify-start self-stretch'
                  >
                    <div
                      data-helper='false'
                      data-label='false'
                      data-prefix='false'
                      data-suffix='false'
                      className='flex flex-col items-start justify-start gap-1 self-stretch'
                    >
                      <div className='bg-Color-Surface-Background---Dashboard inline-flex items-start justify-start self-stretch rounded-lg'>
                        <div className='inline-flex w-72 flex-col items-start justify-start gap-2 rounded-lg p-3'>
                          <div
                            data-show-content='true'
                            data-size='16px'
                            data-icon-left='false'
                            data-icon-right='false'
                            className='inline-flex items-center justify-start gap-6 self-stretch'
                          >
                            <div className='flex flex-1 items-center justify-start gap-2'>
                              <div className="text-Color-Neutral-500 flex-1 justify-start font-['Inter'] text-sm font-normal leading-tight">
                                Mạnh Sơn
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-3.5 self-stretch'>
                <div className='flex flex-1 items-center justify-start gap-5'>
                  <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                    <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                      Chức danh công việc
                    </div>
                    <div className="text-Color-Text-Red-text justify-start self-stretch font-['Inter'] text-sm font-normal leading-tight">
                      Chưa có thông tin
                    </div>
                  </div>
                </div>
                <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                  <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                    Email
                  </div>
                  <div
                    data-size='Large'
                    data-state='Default'
                    className='flex flex-col items-start justify-start self-stretch'
                  >
                    <div
                      data-helper='false'
                      data-label='false'
                      data-prefix='false'
                      data-suffix='false'
                      className='flex flex-col items-start justify-start gap-1 self-stretch'
                    >
                      <div className='bg-Color-Surface-Background---Dashboard inline-flex items-start justify-start self-stretch rounded-lg'>
                        <div className='inline-flex w-72 flex-col items-start justify-start gap-2 rounded-lg p-3'>
                          <div
                            data-show-content='true'
                            data-size='16px'
                            data-icon-left='false'
                            data-icon-right='false'
                            className='inline-flex items-center justify-start gap-6 self-stretch'
                          >
                            <div className='flex flex-1 items-center justify-start gap-2'>
                              <div className="text-Color-Neutral-500 flex-1 justify-start font-['Inter'] text-sm font-normal leading-tight">
                                manhson123@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-3.5 self-stretch'>
                <div className='flex flex-1 items-center justify-start gap-5'>
                  <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                    <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                      Link hồ sơ
                    </div>
                    <div
                      data-size='Large'
                      data-state='Default'
                      className='flex flex-col items-start justify-start self-stretch'
                    >
                      <div
                        data-helper='false'
                        data-label='false'
                        data-prefix='false'
                        data-suffix='false'
                        className='flex flex-col items-start justify-start gap-1 self-stretch'
                      >
                        <div className='bg-Color-Surface-Background---Dashboard inline-flex items-start justify-start self-stretch rounded-lg'>
                          <div className='inline-flex w-72 flex-col items-start justify-start gap-2 rounded-lg p-3'>
                            <div
                              data-show-content='true'
                              data-size='16px'
                              data-icon-left='false'
                              data-icon-right='false'
                              className='inline-flex items-center justify-start gap-6 self-stretch'
                            >
                              <div className='flex flex-1 items-center justify-start gap-2'>
                                <div className="text-Color-Neutral-500 flex-1 justify-start font-['Inter'] text-sm font-normal leading-tight">
                                  www.dnnet.eu/thanhvien/manh-son
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex h-20 flex-1 items-start justify-start gap-5'>
                  <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                    <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                      Giới tính
                    </div>
                    <div className="text-Color-Text-Red-text justify-start self-stretch font-['Inter'] text-sm font-normal leading-tight">
                      Chưa có thông tin
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-3.5 self-stretch'>
                <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                  <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                    Số điện thoại
                  </div>
                  <div className="text-Color-Text-Red-text justify-start self-stretch font-['Inter'] text-sm font-normal leading-tight">
                    Chưa có thông tin
                  </div>
                </div>
                <div className='inline-flex flex-1 flex-col items-start justify-start gap-2'>
                  <div className="text-Color-Text-Primary justify-start self-stretch font-['Inter'] text-base font-semibold leading-normal">
                    Nước
                  </div>
                  <div className="text-Color-Text-Red-text justify-start self-stretch font-['Inter'] text-sm font-normal leading-tight">
                    Chưa có thông tin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 flex flex-col items-start justify-start self-stretch rounded-lg outline outline-1'>
            <div className='bg-Color-Shape-Background-1 border-Color-Shape-Border-2 inline-flex h-14 items-center justify-start gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg border-b px-5 py-2.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                Liên kết mạng xã hội
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='flex items-center justify-start gap-2'>
                  <div data-product-name='google' className='relative h-6 w-6 overflow-hidden'>
                    <div className='absolute left-[12.22px] top-[10.09px] h-2.5 w-2.5 bg-blue-500' />
                    <div className='absolute left-[2.64px] top-[14.08px] h-2 w-4 bg-green-600' />
                    <div className='absolute left-[1.50px] top-[7.24px] h-2.5 w-1 bg-yellow-500' />
                    <div className='absolute left-[2.64px] top-[1.50px] h-2 w-4 bg-red-500' />
                  </div>
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
                      <div className='flex items-center justify-center gap-2'>
                        <div className="text-Color-Text-Primary justify-start font-['Inter'] text-sm font-medium leading-tight">
                          Ngắt Kết Nối
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='flex items-center justify-start gap-2'>
                  <div data-social-name='Facebook' className='relative h-6 w-6'>
                    <div className='absolute left-[1.50px] top-[1.50px] h-5 w-5 rounded-full bg-gradient-to-b from-sky-500 to-blue-700' />
                    <div className='absolute left-[7.50px] top-[6px] h-4 w-2 bg-white' />
                  </div>
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
                      <div className='flex items-center justify-center gap-2'>
                        <div className="text-Color-Text-Tertiary justify-start font-['Inter'] text-sm font-medium leading-tight">
                          Kết Nối
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='outline-Color-Shape-Border-2 flex flex-col items-start justify-start self-stretch rounded-lg outline outline-1'>
            <div className='bg-Color-Shape-Background-1 border-Color-Shape-Border-2 inline-flex h-14 items-center justify-start gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg border-b px-5 py-2.5'>
              <div className="text-Color-Text-Primary justify-start font-['Inter'] text-base font-semibold leading-normal">
                Tài khoản
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5 self-stretch p-5'>
              <div
                data-size='Medium'
                data-state='Default'
                data-type='Solid'
                className='flex flex-col items-start justify-start'
              >
                <div className='bg-Color-Primary-500 flex flex-col items-center justify-start gap-2 self-stretch rounded-lg px-3 py-2.5'>
                  <div
                    data-show-content='true'
                    data-size='14 px'
                    data-icon-left='false'
                    data-icon-right='false'
                    className='inline-flex items-center justify-center gap-2'
                  >
                    <div className='flex items-center justify-center gap-2'>
                      <div className="text-Color-Text-Tertiary justify-start font-['Inter'] text-sm font-medium leading-tight">
                        Xóa Tài Khoản
                      </div>
                    </div>
                  </div>
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
