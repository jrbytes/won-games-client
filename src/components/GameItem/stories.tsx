import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Population Zero',
    price: '235.00'
  }
} as ComponentMeta<typeof GameItem>

export const Default: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)

export const WithPayment: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} downloadLink="https://wongames.com/game/download/123" />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/123',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
