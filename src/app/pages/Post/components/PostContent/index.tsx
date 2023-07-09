import { RegularText } from '../../../../shared/components/Typograph/styled'
import {
  PostContentCode,
  PostContentContainer,
  PostContentDescription,
} from './styled'
import { SinglePostProps } from '../../index'

type ContentPostProps = {
  post: SinglePostProps
}

export const PostContent = ({ post }: ContentPostProps) => {
  return (
    <PostContentContainer>
      <PostContentDescription>
        <RegularText size="m" color="text">
          {post.body}
        </RegularText>
      </PostContentDescription>

      <PostContentCode>
        <p>let foo = 42</p>
        <p>foo = "bar"</p>
        <p>foo = true</p>
      </PostContentCode>
    </PostContentContainer>
  )
}
