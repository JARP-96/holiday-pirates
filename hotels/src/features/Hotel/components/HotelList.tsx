import React, { useMemo } from 'react'
import Hotel from './Hotel'
import { HotelData, Hotels } from '../types/types'

const HotelList: React.FC<{ hotels: Hotels }> = ({ hotels }) => {
  const hotelCollection = useMemo(
    () => hotels?.hotelCollection?.items || [],
    [hotels]
  )

  return (
    <div className='hotelList'>
      {hotelCollection.map((hotel: HotelData) => (
        <Hotel hotel={hotel} key={hotel.sys.id} />
      ))}
    </div>
  )
}

export default HotelList
