import styled from 'styled-components'
import { DefaultInfoContainer } from '../../../../shared/components/DefaultInfoContainer/styled'

export const InfoCardContainer = styled(DefaultInfoContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const InfoCardLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 12px;
      height: 12px;
      color: ${({ theme }) => theme.colors['brand-blue']};
    }

    p {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['brand-blue']};
      font-family: Nunito;
      font-weight: 700;
      line-height: 160%;
    }
  }
`
