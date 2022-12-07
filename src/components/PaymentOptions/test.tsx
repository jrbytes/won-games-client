import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should be able to render the saved card options and the add new card button', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should be able to handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    fireEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not be able to call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    fireEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should be able to call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    fireEvent.click(screen.getByLabelText(/4325/))
    fireEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
