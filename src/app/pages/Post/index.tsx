import { useParams } from 'react-router-dom'
import { InfoCard } from './components/InfoCard'
import { PostContent } from './components/PostContent'
import { InfoPostsContainer } from './styled'
import { useBlog } from '../../shared/hooks/useContext'
import { useCallback, useEffect, useState } from 'react'
import { BlogContextProps, IssuesProps } from '../../shared/context/index'

export interface SinglePostProps extends IssuesProps {
  html_url: string
  comments: string | Number
  login: string
  body: string
}

export const Post = () => {
  const [post, setPost] = useState({} as SinglePostProps)
  const { number } = useParams()

  const { getSingleIssue } = useBlog() as unknown as BlogContextProps

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
      <PostContent content={post.body} />
    </InfoPostsContainer>
  )
}
