import { createContext, ReactNode, useEffect, useState } from 'react'
import { profileData } from '../../pages/Blog/components/Profile'
import { issuesProps } from '../../pages/Post/components/PostContent'

interface BlogContextProps {
  dados: profileData
  issues: issuesProps[]
}

interface ChildrenProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogProvider = ({ children }: ChildrenProps) => {
  const [dados, setDados] = useState({} as profileData)
  const [issues, setIssues] = useState<Array<issuesProps>>([])

  async function getIssues() {
    const response = await fetch(
      'https://api.github.com/repos/BBML-DEV/git-blog-posts/issues',
    )
    const json = await response.json()
    console.log(json)
    setIssues(json)
  }

  async function getProfileData() {
    const response = await fetch('https://api.github.com/users/BBML-DEV')
    const json = await response.json()
    setDados(json)
  }

  useEffect(() => {
    getProfileData()
    getIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ dados, issues }}>
      {children}
    </BlogContext.Provider>
  )
}
