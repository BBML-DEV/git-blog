import { SearchContainer } from './styled'

// interface SearchProps {
//   quantityPublication: number
// }

export const Search = () => {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <p>6 Publicações</p>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
