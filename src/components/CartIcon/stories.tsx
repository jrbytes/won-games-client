import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartIcon>

export const Default: ComponentStory<typeof CartIcon> = () => <CartIcon />

export const WithIcons: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
)

WithIcons.args = {
  quantity: 7
}
