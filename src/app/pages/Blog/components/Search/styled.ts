import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.75rem;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: 6px;
    padding: 12px 16px 12px 16px;
    background-color: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    outline: none;
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
      color: ${({ theme }) => theme.colors['base-label']};
      line-height: 160%;
    }
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }
`
