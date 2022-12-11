import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameInfo from '.'

import mockGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as ComponentMeta<typeof GameInfo>

export const Default: ComponentStory<typeof GameInfo> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
)
