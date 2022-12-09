import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown from '.'

const props = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'World of Warcraft',
    price: '235.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Euro Truck Simulator 2',
    price: '35.00'
  }
]
const total = props
  .map((item) => Number(item.price))
  .reduce((a, b) => a + b)
  .toString()

describe('<CartDropdown />', () => {
  it('should be able to render the <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={props} total={total} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${props.length}`)).toBeInTheDocument()
  })

  it('should be able to render the Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={props} total={total} />)
    expect(screen.getByText(total)).toBeInTheDocument()
    expect(screen.getByText(props[0].title)).toBeInTheDocument()
  })
})
