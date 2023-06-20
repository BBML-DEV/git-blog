import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typograph/styled'
import { SearchContainer } from './styled'

// interface SearchProps {
//   quantityPublication: number
// }

export const Search = () => {
  return (
    <SearchContainer>
      <div>
        <TittleText size="s" color="subtitle">
          Publicações
        </TittleText>
        <RegularText size="s" color="span">
          6 Publicações
        </RegularText>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
