import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoWithIcon } from '../../shared/components/InfoWithIcon'
import { InfoCard, InfoPostsContainer } from './styled'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'

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

export const Post = () => {
  return (
    <InfoPostsContainer className="container">
      <InfoCard>
        <div>
          <a href="#">voltar</a>

          <a href="#">Ver no github</a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        {BagdesPostData.map(({ icon, text }) => (
          <InfoWithIcon icon={icon} text={text} key={text} />
        ))}
      </InfoCard>
    </InfoPostsContainer>
  )
}
