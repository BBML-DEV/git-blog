import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoCardLinks, InfoCardContainer } from './styled'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { TittleText } from '../../../../shared/components/Typograph/styled'
import { BadgesContainerDefault } from '../../../Blog/components/Profile/styled'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useBlog } from '../../../../shared/hooks/useContext'
import { SinglePostProps } from '../../index'
import { BlogContextProps } from '../../../../shared/Context'

type InfoPostProps = {
  post: SinglePostProps
}

export const InfoCard = ({ post }: InfoPostProps) => {
  const { dados } = useBlog() as unknown as BlogContextProps

  return (
    <InfoCardContainer>
      <InfoCardLinks>
        <Link to={'/'}>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
            <p>voltar</p>
          </div>
        </Link>

        <Link to={post.html_url}>
          <div>
            <p>Ver no github</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </Link>
      </InfoCardLinks>

      <TittleText size="l" color="title">
        {post.title}
      </TittleText>

      <BadgesContainerDefault>
        <InfoWithIcon
          icon={<FontAwesomeIcon icon={faGithub} />}
          text={dados.login}
        />
        {post.comments > 0 ? (
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faComment} />}
            text={
              post.comments === 1
                ? `${post.comments} comentário`
                : `${post.comments} comentários`
            }
          />
        ) : null}
      </BadgesContainerDefault>
    </InfoCardContainer>
  )
}
