import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should be able to render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 470" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/R\$ 470/i)).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 470" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })
})
