import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from '.'

export default {
  title: 'Container',
  component: Container
} as ComponentMeta<typeof Container>

export const Default: ComponentStory<typeof Container> = () => <Container />
