import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  SetStateAction,
} from 'react'
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
  setIssues: React.Dispatch<SetStateAction<issuesProps[]>>
  item: string
  setItem: React.Dispatch<React.SetStateAction<string>>
  filterItem: issuesProps[]
  setFilterItem: React.Dispatch<SetStateAction<issuesProps[]>>
}

interface ChildrenProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextProps)

export const BlogProvider = ({ children }: ChildrenProps) => {
  const [dados, setDados] = useState({} as profileData)
  const [issues, setIssues] = useState<Array<issuesProps>>([])
  const [item, setItem] = useState('')
  const [filterItem, setFilterItem] = useState<Array<issuesProps>>([])

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
    <BlogContext.Provider
      value={{
        dados,
        issues,
        getSingleIssue,
        setIssues,
        item,
        setItem,
        filterItem,
        setFilterItem,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
