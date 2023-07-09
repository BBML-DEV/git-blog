import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
    text-decoration: none;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  img {
    width: 100%;
  }

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1.6rem;
    border-radius: 2px;
    margin-top: 2.4rem;
    code {
      font-family: monospace !important;
      line-height: 160% !important;
    }
  }
`
