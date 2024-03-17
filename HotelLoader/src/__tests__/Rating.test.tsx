/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import Rating from '../features/Hotel/components/HotelRating'

describe('Rating component', () => {
  it('renders correct number of filled stars for rating 1', () => {
    const { getByText } = render(<Rating rating={1} />)
    expect(getByText('★☆☆☆☆')).toBeInTheDocument()
  })

  it('renders correct number of filled stars for rating 5', () => {
    const { getByText } = render(<Rating rating={5} />)
    expect(getByText('★★★★★')).toBeInTheDocument()
  })

  it('renders correct number of filled stars for rating greater than 5', () => {
    const { getByText } = render(<Rating rating={7} />)
    expect(getByText('★★★★★')).toBeInTheDocument()
  })

  it('renders correct number of filled stars for rating less than 1', () => {
    const { getByText } = render(<Rating rating={-2} />)
    expect(getByText('☆☆☆☆☆')).toBeInTheDocument()
  })
})
