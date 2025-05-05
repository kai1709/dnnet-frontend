'use client'
import NextNProgress from 'nextjs-progressbar'

const NProgress = () => {
  return <NextNProgress height={4} color='#0d2442' showOnShallow={false} options={{ showSpinner: false }} />
}

export default NProgress
