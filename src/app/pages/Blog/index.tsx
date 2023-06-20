import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { BlogContainer } from './styled'

export const Blog = () => {
  return (
    <BlogContainer className="container">
      <Profile />
      <Search />
    </BlogContainer>
  )
}
