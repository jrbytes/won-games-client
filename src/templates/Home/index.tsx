import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'

import Base from '../../templates/Base'
import { Container } from '../../components/Container'
import ShowCase from '../../components/ShowCase'
import BannerSlider from '../../components/BannerSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  data: any
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} />
    </S.SectionNews>

    <ShowCase
      title="Most popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <S.SectionUpcoming>
      <ShowCase title="Upcoming" games={upcomingGames} />
      <ShowCase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <ShowCase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
