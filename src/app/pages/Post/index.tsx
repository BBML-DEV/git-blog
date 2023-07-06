import { useParams } from 'react-router-dom'
import { InfoCard } from './components/InfoCard'
import { PostContent } from './components/PostContent'
import { InfoPostsContainer } from './styled'
import { useBlog } from '../../shared/hooks/useContext'
import { useCallback, useEffect, useState } from 'react'

export interface SinglePostProps {
  title?: string
  html_url?: string
  body?: string
  created_at?: string
  comments?: string
  login: string
}

export const Post = () => {
  const [post, setPost] = useState({} as SinglePostProps)
  const { number } = useParams()

  const { getSingleIssue } = useBlog()

  const getSinglePost = useCallback(async () => {
    const issue = await getSingleIssue(Number(number))
    setPost(issue)
  }, [getSingleIssue, number])

  useEffect(() => {
    getSinglePost()
  }, [getSinglePost])

  console.log(post)
  return (
    <InfoPostsContainer className="container">
      <InfoCard post={post} />
      <PostContent post={post} />
    </InfoPostsContainer>
  )
}
