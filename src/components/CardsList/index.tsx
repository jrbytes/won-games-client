import Image from 'next/image'

import Heading from 'components/Heading'
import { PaymentCardProps } from 'components/PaymentOptions'

import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCardProps[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <Image src={card.img} alt={card.flag} width={38} height={24} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
