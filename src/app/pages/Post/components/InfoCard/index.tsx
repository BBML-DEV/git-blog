import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoCardLinks, InfoCardContainer } from './styled'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { TittleText } from '../../../../shared/components/Typograph/styled'
import { BadgesContainerDefault } from '../../../Blog/components/Profile/styled'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const BagdesPostData = [
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    text: 'cameronwll',
  },
  {
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
    text: 'Há 1 dia',
  },
  {
    icon: <FontAwesomeIcon icon={faComment} />,
    text: '5 comentários',
  },
]

export const InfoCard = () => {
  return (
    <InfoCardContainer>
      <InfoCardLinks>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>voltar</p>
        </div>

        <div>
          <p>Ver no github</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </InfoCardLinks>

      <TittleText size="l" color="title">
        JavaScript data types and data structures
      </TittleText>

      <BadgesContainerDefault>
        {BagdesPostData.map(({ icon, text }) => (
          <InfoWithIcon icon={icon} text={text} key={text} />
        ))}
      </BadgesContainerDefault>
    </InfoCardContainer>
  )
}
