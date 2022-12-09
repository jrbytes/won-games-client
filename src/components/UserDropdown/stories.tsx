import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    username: 'Jr Bytes'
  }
} as ComponentMeta<typeof UserDropdown>

export const Default: ComponentStory<typeof UserDropdown> = (args) => (
  <div style={{ maxWidth: '89%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)
