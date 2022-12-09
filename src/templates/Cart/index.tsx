import Base from '../../templates/Base'
import { Container } from '../../components/Container'
import Heading from '../../components/Heading'
import ShowCase from '../../components/ShowCase'
import { Divider } from '../../components/Divider'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import CartList, { CartListProps } from '../../components/CartList'
import PaymentOptions, {
  PaymentOptionsProps
} from '../../components/PaymentOptions'

import * as S from './styles'
import Empty from '../../components/Empty'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  PaymentOptionsProps

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items = [],
  total,
  cards
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        {items.length > 0 ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
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
}

export default Cart
