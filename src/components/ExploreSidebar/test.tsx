import { fireEvent, screen } from '@testing-library/react'
import { css } from 'styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import itemsMock from './mock'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should be able to render headings', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should be able to render inputs', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should be able to render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should be able to check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={itemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should be able to filter with initial values', () => {
    const onFilter = jest.fn()
    renderWithTheme(
      <ExploreSidebar
        items={itemsMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      sort_by: 'low-to-high'
    })
  })

  it('should be able to filter with checked values', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    fireEvent.click(screen.getByLabelText(/windows/i))
    fireEvent.click(screen.getByLabelText(/linux/i))
    fireEvent.click(screen.getByLabelText(/low to high/i))

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })

  it('should be able to alter between radio options', () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    fireEvent.click(screen.getByLabelText(/low to high/i))
    fireEvent.click(screen.getByLabelText(/high to low/i))

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      sort_by: 'high-to-low'
    })
  })

  it('should be able to open/close sidebar when filtering on mobile', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={itemsMock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
    fireEvent.click(screen.getByLabelText(/open filters/))
    expect(Element).toHaveStyleRule('opacity', '1', variant)
    fireEvent.click(screen.getByLabelText(/close filters/))
    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
