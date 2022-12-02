import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should be able to render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(
      screen.getByPlaceholderText('Email', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Password', { exact: true })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should be able to render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByText('Forgot your password?', { selector: 'a' })
    ).toBeInTheDocument()
  })

  it('should be able to render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
