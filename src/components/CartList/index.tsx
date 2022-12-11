import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={items.length === 0}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Button href="/cart" as="a">
              Buy it now
            </Button>
          )}
        </S.Footer>
      </>
    ) : (
      <>
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      </>
    )}
  </S.Wrapper>
)

export default CartList
