import { Story, ComponentMeta } from '@storybook/react'
import CartList, { CartListProps } from '.'

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

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList />
  </div>
)
