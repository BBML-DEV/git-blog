import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typograph/styled'
import { SearchContainer } from './styled'
import { useBlog } from '../../../../shared/hooks/useContext'
import { BlogContextProps } from '../../../../shared/context'

export const Search = () => {
  const { issues, item, setItem, filterItem } =
    useBlog() as unknown as BlogContextProps

  return (
    <SearchContainer>
      <div>
        <TittleText size="s" color="subtitle">
          Publicações
        </TittleText>
        <RegularText size="s" color="span">
          {filterItem.length
            ? filterItem.length > 1
              ? `${filterItem.length} Publicações`
              : `${filterItem.length} Publicação`
            : issues.length > 1
            ? `${issues.length} Publicações`
            : `${issues.length} Publicação`}
        </RegularText>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </SearchContainer>
  )
}
