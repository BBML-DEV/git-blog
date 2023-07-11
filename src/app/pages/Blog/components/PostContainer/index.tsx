import { Link } from 'react-router-dom'
import { useBlog } from '../../../../shared/hooks/useContext'
import { CardPost } from './components/CardPost'
import { PostsBlogContainer } from './styled'
import { useEffect } from 'react'
import { BlogContextProps } from '../../../../shared/Context'

export const PostContainer = () => {
  const { issues, filterItem, setFilterItem, item } =
    useBlog() as unknown as BlogContextProps

  useEffect(() => {
    setFilterItem(
      issues.filter((post) =>
        post.title.toLowerCase().includes(item.toLowerCase()),
      ),
    )
  }, [item])

  return (
    <PostsBlogContainer>
      {item.length > 0
        ? filterItem.map((issue) => {
            return (
              <Link key={issue.id} to={`/post/${issue.number}`}>
                <CardPost
                  title={issue.title}
                  body={issue.body}
                  date={issue.created_at}
                />
              </Link>
            )
          })
        : issues.map((issue) => {
            return (
              <Link key={issue.id} to={`/post/${issue.number}`}>
                <CardPost
                  title={issue.title}
                  body={issue.body}
                  date={issue.created_at}
                />
              </Link>
            )
          })}
    </PostsBlogContainer>
  )
}
