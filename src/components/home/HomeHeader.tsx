const HomeHeader = ({ title }: { title: string }) => (
  <div
    className='w-full border-l-[2px] border-l-red-primary bg-red-primary-50 px-4 py-3 text-lg font-bold text-red-primary'
    style={{ lineHeight: '1.125rem' }}
  >
    {title}
  </div>
)

export default HomeHeader
