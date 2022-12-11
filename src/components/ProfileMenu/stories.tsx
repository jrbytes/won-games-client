import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ProfileMenu>

export const Default: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)
