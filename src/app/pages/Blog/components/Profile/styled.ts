import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 13.25rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  margin-top: -100px;
  padding: 0 32px;

  > div:first-child {
    padding-left: 8px;
    img {
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

  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  svg {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
`

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1.938rem;
`
