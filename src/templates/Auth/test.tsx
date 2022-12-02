import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should be able to render all components and children', () => {
    renderWithTheme(
      <Auth title="Sign In">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: 'All your favorite game in one place'
      })
    ).toBeInTheDocument()
    const subtitle =
      screen.getByText('WON', { selector: 'strong' }) &&
      screen.getByText('is the best and most complete gaming platform.')
    expect(subtitle).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
