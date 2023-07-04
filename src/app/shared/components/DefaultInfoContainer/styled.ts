import styled from 'styled-components'

export const DefaultInfoContainer = styled.div`
  gap: 2rem;
  width: 100%;
  height: 13.25rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  margin-top: -100px;
  padding: 0 32px;
`
