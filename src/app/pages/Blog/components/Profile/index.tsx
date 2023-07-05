import {
  BagdesProfileContainer,
  InfoProfileContainer,
  NameContainer,
  ProfileContainer,
} from './styled'
import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typograph/styled'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useBlog } from '../../../../shared/hooks/useContext'

export interface profileData {
  name: string
  avatar_url: string
  bio: string
  login: string
  following: number
}

export const Profile = () => {
  const { dados } = useBlog()

  return (
    <ProfileContainer>
      <div>
        <img src={dados.avatar_url} alt="" />
      </div>

      <InfoProfileContainer>
        <NameContainer>
          <TittleText size="l" weight={700} color="title">
            {dados.name}
          </TittleText>
          <RegularText size="s">
            <a href="#">GITHUB </a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </RegularText>
        </NameContainer>

        <RegularText size="m" color="text">
          {dados.bio}
        </RegularText>

        <BagdesProfileContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={dados.login}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text={`${dados.following} seguidores`}
          />
        </BagdesProfileContainer>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
