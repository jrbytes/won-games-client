import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Population Zero',
  description: 'Game Description',
  price: '60.00'
}

describe('<GameInfo />', () => {
  it('should be able to render game information', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Population Zero' })
    ).toBeInTheDocument()
    expect(screen.getByText('Game Description')).toBeInTheDocument()
    expect(screen.getByText('$ 60.00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
