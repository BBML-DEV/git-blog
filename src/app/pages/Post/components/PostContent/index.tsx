import { PostContentContainer } from './styled'
import { SinglePostProps } from '../../index'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

type ContentPostProps = {
  post: SinglePostProps
}

export const PostContent = ({ post }: ContentPostProps) => {
  return (
    <PostContentContainer>
      <ReactMarkdown children={post.body}></ReactMarkdown>
    </PostContentContainer>
  )
}
