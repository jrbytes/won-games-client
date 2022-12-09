import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>

    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should be able to render title', () => {
    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument()
  })

  it('should be able to handle open/close dropdown', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    fireEvent.click(screen.getByLabelText(/toggle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })
})
