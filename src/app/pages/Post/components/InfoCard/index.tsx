import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoCardLinks, InfoCardContainer } from './styled'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { TittleText } from '../../../../shared/components/Typograph/styled'
import { BadgesContainerDefault } from '../../../Blog/components/Profile/styled'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { useBlog } from '../../../../shared/hooks/useContext'

export const InfoCard = () => {
  const { dados } = useBlog()

  return (
    <InfoCardContainer>
      <InfoCardLinks>
        <NavLink to={'/'}>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
            <p>voltar</p>
          </div>
        </NavLink>

        <div>
          <p>Ver no github</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </InfoCardLinks>

      <TittleText size="l" color="title">
        JavaScript data types and data structures
      </TittleText>

      <BadgesContainerDefault>
        <InfoWithIcon
          icon={<FontAwesomeIcon icon={faGithub} />}
          text={dados.login}
        />
      </BadgesContainerDefault>
    </InfoCardContainer>
  )
}
