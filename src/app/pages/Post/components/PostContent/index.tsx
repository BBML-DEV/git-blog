import { RegularText } from '../../../../shared/components/Typograph/styled'
import { useBlog } from '../../../../shared/hooks/useContext'
import {
  PostContentCode,
  PostContentContainer,
  PostContentDescription,
} from './styled'

export interface issuesProps {
  id: string
  title: string
  body: string
  html_url: string
  comments: number
  number: number
}

export const PostContent = () => {
  const { issues } = useBlog()

  return (
    <PostContentContainer>
      <PostContentDescription>
        <RegularText size="m" color="text">
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
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
