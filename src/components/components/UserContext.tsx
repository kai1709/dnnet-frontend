'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { User } from './Header'
import { decrypt } from '../lib/utils'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'

export const UserContext = createContext<{ user: User | null; setUser: (user: User | null) => void } | null>({
  user: null,
  setUser: () => {}
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const path = usePathname()

  useEffect(() => {
    loadUser()
  }, [path])

  const loadUser = async () => {
    const cookie = Cookies.get('user')
    const session = await decrypt(cookie)
    if (session) {
      const userData = JSON.parse(session)
      setUser(userData)
    }
  }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
