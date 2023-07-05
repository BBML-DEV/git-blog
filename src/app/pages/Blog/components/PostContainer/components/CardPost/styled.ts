import styled from 'styled-components'

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-post']};
  border: 1px solid transparent;
  transition: 0.4s;

  .textLines {
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }
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
