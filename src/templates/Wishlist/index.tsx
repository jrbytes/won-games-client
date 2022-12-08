import Base from '../../templates/Base'
import { Container } from '../../components/Container'
import GameCard, { GameCardProps } from '../../components/GameCard'
import Heading from '../../components/Heading'
import { HighlightProps } from '../../components/Highlight'
import ShowCase from '../../components/ShowCase'
import { Grid } from '../../components/Grid'
import { Divider } from '../../components/Divider'
import Empty from '../../components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games && games.length >= 1 ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will apper here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <ShowCase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
