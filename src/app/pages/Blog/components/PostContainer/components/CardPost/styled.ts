import styled from 'styled-components'

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-post']};
`
export const PostTittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.25rem;

  p {
    width: 80px;
  }
`
