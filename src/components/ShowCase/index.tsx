import GameCardSlider from '../GameCardSlider'
import Heading from '../Heading'
import Highlight, { HighlightProps } from '../Highlight'
import { GameCardProps } from '../GameCard'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const ShowCase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default ShowCase
