import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartList from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: mockItems,
    total: 'R$ 430,00'
  }
} as ComponentMeta<typeof CartList>

export const Default: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const WithButton: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: ComponentStory<typeof CartList> = () => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList />
  </div>
)
