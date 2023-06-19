import { ContainerHeader } from './styled'
import logo from '../../../../assets/logo-header.png'

export const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} />
    </ContainerHeader>
  )
}
