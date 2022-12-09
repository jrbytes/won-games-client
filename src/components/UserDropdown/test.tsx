import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should be able to render the username', () => {
    renderWithTheme(<UserDropdown username="Jr Bytes" />)

    expect(screen.getByText(/jr bytes/i)).toBeInTheDocument()
  })

  it('should be able to render the menu', () => {
    renderWithTheme(<UserDropdown username="Jr Bytes" />)

    fireEvent.click(screen.getByText(/jr bytes/i))
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
