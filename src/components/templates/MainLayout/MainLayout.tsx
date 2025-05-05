import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import Header from '@/components/components/Header'
import Footer from '@/components/components/Footer'
import NProgress from '@/components/components/NProgress'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={cn('', className)}>
      <div className='mx-auto min-h-screen w-full max-w-[1280px] bg-main-background'>
        <NProgress />
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
