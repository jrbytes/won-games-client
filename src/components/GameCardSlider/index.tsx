import GameCard, { GameCardProps } from '../GameCard'
import SlickArrowLeft from '../SlickArrowLeft'
import SlickArrowRight from '../SlickArrowRight'
import Slider, { SliderSettings } from '../Slider'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  prevArrow: <SlickArrowLeft aria-label="previous games" />,
  nextArrow: <SlickArrowRight aria-label="next games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
