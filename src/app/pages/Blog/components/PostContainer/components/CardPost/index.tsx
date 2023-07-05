import {
  RegularText,
  TittleText,
} from '../../../../../../shared/components/Typograph/styled'
import { CardPostContainer, PostTittleContainer } from './styled'

interface CardPostProps {
  title: string
  body: string
}

export const CardPost = ({ title, body }: CardPostProps) => {
  return (
    <CardPostContainer>
      <PostTittleContainer>
        <TittleText size="m">{title}</TittleText>
        <RegularText size="s" color="span">
          Há 1 dia
        </RegularText>
      </PostTittleContainer>

      <RegularText size="m" color="text" className="textLines">
        {body}
      </RegularText>
    </CardPostContainer>
  )
}
