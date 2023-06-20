import {
  RegularText,
  TittleText,
} from '../../../../../../shared/components/Typograph/styled'
import { CardPostContainer, PostTittleContainer } from './styled'

export const CardPost = () => {
  return (
    <CardPostContainer>
      <PostTittleContainer>
        <TittleText size="m">
          JavaScript data types and data structures
        </TittleText>
        <RegularText size="s" color="span">
          Há 1 dia
        </RegularText>
      </PostTittleContainer>

      <RegularText size="m" color="text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available...
      </RegularText>
    </CardPostContainer>
  )
}
