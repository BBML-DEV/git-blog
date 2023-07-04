import { InfoCard } from './components/InfoCard'
import { PostContent } from './components/PostContent'
import { InfoPostsContainer } from './styled'

export const Post = () => {
  return (
    <InfoPostsContainer className="container">
      <InfoCard />
      <PostContent />
    </InfoPostsContainer>
  )
}
