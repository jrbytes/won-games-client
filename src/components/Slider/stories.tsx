import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  height: 10rem;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: ComponentStory<typeof Slider> = () => {
  return (
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Vertical: ComponentStory<typeof Slider> = () => {
  return (
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
    </Slider>
  )
}
