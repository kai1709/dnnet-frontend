import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDevice = () => {
  // return new Promise(async resolve => {
  //   const headersList = await headers()
  //   const isMobile = headersList.get('x-is-mobile') === 'true'
  //   resolve(isMobile)
  // })
}

export const createMetadata = ({
  title = 'DNnet.eu - Kết nối doanh nghiệp',
  description = 'DNnet.eu - Kết nối doanh nghiệp',
  canonical = '',
  image = '/logo-1.png?v=2'
}) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url: canonical,
    images: [{ url: image }]
  },
  twitter: {
    title,
    description,
    images: [image]
  }
})

export const formatTitleToSlug = (title: string) => {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const getIdFromSlug = (slug: string) => {
  const arr = slug.split('-')

  return arr[arr.length - 1]
}

export const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1, s.length)
}
