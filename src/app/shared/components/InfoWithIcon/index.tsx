import { ReactNode } from 'react'
import { RegularText } from '../Typograph/styled'
import { IconContainer, InfoWithIconContainer } from './styled'

interface InfoWithProps {
  icon?: ReactNode
  text?: string
}

export const InfoWithIcon = ({ icon, text }: InfoWithProps) => {
  return (
    <InfoWithIconContainer>
      <IconContainer>{icon}</IconContainer>
      <RegularText size="m" color="subtitle">
        {text}
      </RegularText>
    </InfoWithIconContainer>
  )
}
