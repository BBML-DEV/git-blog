import styled from 'styled-components'
import { DefaultInfoContainer } from '../../../../shared/components/DefaultInfoContainer/styled'

export const ProfileContainer = styled(DefaultInfoContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 13.25rem;

  > div:first-child {
    padding-left: 8px;
    img {
      width: 148px;
      height: 148px;
      border-radius: 8px;
    }
  }
`

export const InfoProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > p:nth-child(2) {
    padding-bottom: 1.5rem;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2.5rem;

  h1 {
    padding-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    p {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }

    svg {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`

export const BadgesContainerDefault = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`

export const BagdesProfileContainer = styled(BadgesContainerDefault)`
  padding-bottom: 1.938rem;
`
