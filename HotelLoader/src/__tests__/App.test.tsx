import { render, screen } from '@testing-library/react'
import App from '../app/App'

test('renders "Load Hotels" button', () => {
  render(<App />)
  const loadHotelsButton = screen.getByText('Load Hotels')
  expect(loadHotelsButton).toBeInTheDocument()
})
