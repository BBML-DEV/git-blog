import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  img {
    width: 100%;
  }

  .code {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors['base-post']};
  }
`

// export const PostContentDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   .code {
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     padding: 1rem;
//     border-radius: 2px;
//     background-color: ${({ theme }) => theme.colors['base-post']};
//   }
// `

// export const PostContentCode = styled.div``
