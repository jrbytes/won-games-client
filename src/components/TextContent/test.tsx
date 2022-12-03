import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Description',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should be able to render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should be able to render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should be able to render different background colors when change the width from content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
