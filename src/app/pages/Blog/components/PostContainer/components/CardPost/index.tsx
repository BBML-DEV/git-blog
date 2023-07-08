import {
  RegularText,
  TittleText,
} from '../../../../../../shared/components/Typograph/styled'
import { CardPostContainer, PostTittleContainer } from './styled'
import { formatted } from '../../../../../../shared/utils/formattedDate'
interface CardPostProps {
  title: string
  body: string
  date: string
}

export const CardPost = ({ title, body, date }: CardPostProps) => {
  const myDate = new Date(date)
  const expectFormat = 'dd/MM/yyyy'

  const dateFormat = formatted(myDate, expectFormat)

  return (
    <CardPostContainer>
      <PostTittleContainer>
        <TittleText size="m">{title}</TittleText>
        <RegularText size="s" color="span">
          {dateFormat}
        </RegularText>
      </PostTittleContainer>

      <RegularText size="m" color="text" className="textLines">
        {body}
      </RegularText>
    </CardPostContainer>
  )
}
