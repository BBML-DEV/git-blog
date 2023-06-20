import {
  BadgesContainer,
  InfoProfileContainer,
  NameContainer,
  ProfileContainer,
} from './styled'
import avatar from '../../../../../assets/avatar.png'
import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typograph/styled'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

export const Profile = () => {
  return (
    <ProfileContainer>
      <div>
        <img src={avatar} alt="" />
      </div>

      <InfoProfileContainer>
        <NameContainer>
          <TittleText size="l" weight={700} color="title">
            Cameron Williamson
          </TittleText>
          <RegularText size="s">
            <a href="#">GITHUB </a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </RegularText>
        </NameContainer>

        <RegularText size="m" color="text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </RegularText>

        <BadgesContainer>
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={'cameronwll'}
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faBuilding} />}
            text="Rocketseat"
          />
          <InfoWithIcon
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text={'32 seguidores'}
          />
        </BadgesContainer>
      </InfoProfileContainer>
    </ProfileContainer>
  )
}
