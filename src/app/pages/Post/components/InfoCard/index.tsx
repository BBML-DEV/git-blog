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

export const InfoCard = () => {
  const { dados, issues } = useBlog()

  return (
    <InfoCardContainer>
      <InfoCardLinks>
        <Link to={'/'}>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
            <p>voltar</p>
          </div>
        </Link>

        <Link to={issues.html_url}>
          <div>
            <p>Ver no github</p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </Link>
      </InfoCardLinks>

      <TittleText size="l" color="title">
        {issues.title}
      </TittleText>

      <BadgesContainerDefault>
        <InfoWithIcon
          icon={<FontAwesomeIcon icon={faGithub} />}
          text={dados.login}
        />
        {issues.comments > 0 ? (
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faComment} />}
            text={
              issues.comments === 1
                ? `${issues.comments} comentário`
                : `${issues.comments} comentários`
            }
          />
        ) : null}
      </BadgesContainerDefault>
    </InfoCardContainer>
  )
}
