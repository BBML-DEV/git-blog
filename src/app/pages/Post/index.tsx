import { InfoWithIcon } from '../../shared/components/InfoWithIcon'
import { InfoCard, InfoPostsContainer } from './styled'

export const Post = () => {
  return (
    <InfoPostsContainer className="container">
      <InfoCard>
        <div>
          <a href="#">voltar</a>

          <a href="#">Ver no github</a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <InfoWithIcon />
      </InfoCard>
    </InfoPostsContainer>
  )
}
