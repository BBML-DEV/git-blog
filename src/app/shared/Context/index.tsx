import { createContext, ReactNode, useEffect, useState } from 'react'
import { profileData } from '../../pages/Blog/components/Profile'

interface BlogContextProps {
  dados: profileData
}

interface ChildrenProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogProvider = ({ children }: ChildrenProps) => {
  const [dados, setDados] = useState({} as profileData)

  async function getProfileData() {
    const response = await fetch('https://api.github.com/users/BBML-DEV')
    const json = await response.json()
    setDados(json)
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <BlogContext.Provider value={{ dados }}>{children}</BlogContext.Provider>
  )
}
