import Base from '../../templates/Base'
import { Grid } from '../../components/Grid'
import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar'
import GameCard, { GameCardProps } from '../../components/GameCard'

import * as S from './styles'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

export type GamesProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games, filterItems }: GamesProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games &&
              games.map((game, index) => (
                <GameCard key={`game-card-${index}`} {...game} />
              ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
