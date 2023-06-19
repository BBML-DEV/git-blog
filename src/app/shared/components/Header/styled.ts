import styled from 'styled-components'
import banner from '../../../../assets/bg-header.png'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18.5rem;
  background: url(${banner}) no-repeat center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    margin-bottom: 5rem;
  }
`
