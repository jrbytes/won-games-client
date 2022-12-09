import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartDropdown from '.'

import items from '../CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: '$ 430,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartDropdown>

export const Default: ComponentStory<typeof CartDropdown> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: ComponentStory<typeof CartDropdown> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
