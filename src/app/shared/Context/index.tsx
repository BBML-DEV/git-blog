import { createContext, ReactNode, useEffect, useState } from 'react'
import { profileData } from '../../pages/Blog/components/Profile'
import { api } from '../libs/axios'

interface issuesProps {
  id: string
  title: string
  body: string
  created_at: string
}

interface BlogContextProps {
  dados: profileData
  issues: issuesProps[]
  getSingleIssue: (id: number) => Promise<any>
}

interface ChildrenProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogProvider = ({ children }: ChildrenProps) => {
  const [dados, setDados] = useState({} as profileData)
  const [issues, setIssues] = useState<Array<issuesProps>>([])

  async function getIssues() {
    const response = await api.get('repos/BBML-DEV/git-blog-posts/issues')
    setIssues(response.data)
  }

  async function getProfileData() {
    const response = await api.get('users/BBML-DEV')
    setDados(response.data)
  }

  async function getSingleIssue(id: number) {
    const response = await api.get(`repos/bbml-dev/git-blog-posts/issues/${id}`)
    return response.data
  }

  useEffect(() => {
    getProfileData()
    getIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ dados, issues, getSingleIssue }}>
      {children}
    </BlogContext.Provider>
  )
}
