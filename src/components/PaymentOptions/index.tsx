import { useState } from 'react'
import Image from 'next/image'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCardProps[]
  handlePayment?: () => void
}

export type PaymentCardProps = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards &&
            cards.map((card) => (
              <S.CardItem key={card.number}>
                <S.CardInfo>
                  <Image
                    src={card.img}
                    alt={card.flag}
                    width={38}
                    height={24}
                  />
                  {card.number}
                </S.CardInfo>
                <Radio
                  id={card.number}
                  name="credit-card"
                  value={card.number}
                  onCheck={() => setIsChecked(true)}
                />
              </S.CardItem>
            ))}
          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!isChecked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
