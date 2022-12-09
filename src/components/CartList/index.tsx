import Button from 'components/Button'
import GameItem, { GameItemProps } from '../GameItem'

import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
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
  </S.Wrapper>
)

export default CartList
