import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <ArrowLeft />
  </button>
)

export default SlickArrowLeft
