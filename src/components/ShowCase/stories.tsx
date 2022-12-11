import { ComponentStory, ComponentMeta } from '@storybook/react'

import ShowCase from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ShowCase>

export const Default: ComponentStory<typeof ShowCase> = (args) => (
  <ShowCase {...args} />
)

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutTitle: ComponentStory<typeof ShowCase> = (args) => (
  <ShowCase {...args} />
)

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: ComponentStory<typeof ShowCase> = (args) => (
  <ShowCase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: ComponentStory<typeof ShowCase> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
