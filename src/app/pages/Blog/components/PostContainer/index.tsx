import { Link } from 'react-router-dom'
import { useBlog } from '../../../../shared/hooks/useContext'
import { CardPost } from './components/CardPost'
import { PostsBlogContainer } from './styled'

export const PostContainer = () => {
  const { issues } = useBlog()

  return (
    <PostsBlogContainer>
      {issues.map((issue) => (
        <Link key={issue.id} to={`/post/${issue.number}`}>
          <CardPost title={issue.title} body={issue.body} />
        </Link>
      ))}
    </PostsBlogContainer>
  )
}
