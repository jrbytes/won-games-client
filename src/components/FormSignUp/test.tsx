import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should be able to render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(
      screen.getByPlaceholderText('Name', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Email', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Password', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Confirm Password', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to render text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })
})
