import { createContext, ReactNode, useEffect, useState } from 'react'
import { profileData } from '../../pages/Blog/components/Profile'

interface issuesProps {
  id: string
  title: string
  body: string
  html_url: string
  comments: number
  number: number
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
    const response = await fetch(
      'https://api.github.com/repos/BBML-DEV/git-blog-posts/issues',
    )
    const json = await response.json()
    setIssues(json)
  }

  async function getProfileData() {
    const response = await fetch('https://api.github.com/users/BBML-DEV')
    const json = await response.json()
    setDados(json)
  }

  async function getSingleIssue(id: number) {
    const response = await fetch(
      `https://api.github.com/repos/bbml-dev/git-blog-posts/issues/${id}`,
    )

    const data = response.json()
    return data
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
