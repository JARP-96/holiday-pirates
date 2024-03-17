import React from 'react'
import { Price } from '../types/types'

const HotelPrice: React.FC<{ price: Price }> = ({
  price: { value, symbol },
}) => (
  <div className='hotel-price'>
    <span>
      {value} {symbol}
    </span>
  </div>
)

export default HotelPrice
