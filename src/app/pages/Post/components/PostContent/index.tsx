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

        <RegularText size="m" color="text">
          <a href="#">Dynamic typing</a>
          <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
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
