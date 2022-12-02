import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ShowCase from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

describe('<ShowCase />', () => {
  it('should be able to render the complete component', () => {
    renderWithTheme(
      <ShowCase
        title="Most popular"
        highlight={highlightMock}
        games={[gamesMock[0]]}
      />
    )

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /read dead is back!/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
  })

  it('should be able to render without title', () => {
    renderWithTheme(
      <ShowCase highlight={highlightMock} games={[gamesMock[0]]} />
    )

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /read dead is back!/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
  })

  it('should be able to render without highlight', () => {
    renderWithTheme(<ShowCase title="Most popular" games={[gamesMock[0]]} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /read dead is back!/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
  })

  it('should be able to render without games', () => {
    renderWithTheme(<ShowCase title="Most popular" highlight={highlightMock} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /read dead is back!/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /population zero/i })
    ).not.toBeInTheDocument()
  })
})
