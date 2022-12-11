import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExploreSidebar from '.'

import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ExploreSidebar>

export const Default: ComponentStory<typeof ExploreSidebar> = (args) => (
  <div style={{ padding: 16, maxWidth: 240 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: ComponentStory<typeof ExploreSidebar> = (
  args
) => (
  <div style={{ padding: 16, maxWidth: 240 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
