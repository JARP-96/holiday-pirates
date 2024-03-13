import React from 'react'
import { Hotel } from './Hotel'
import { HotelData, Hotels, Images } from '../interfaces/interfaces'

export const HotelList: React.FC<{
  hotels: Hotels
  images: Images
}> = ({ hotels, images }) => {
  const hotelCollection = hotels?.hotelCollection?.items || []

  return (
    <div className='hotelList'>
      {hotelCollection.map((hotel: HotelData, index: number) => {
        const id = hotel.sys.id
        const image = images?.assetCollection?.items[index]
        return <Hotel hotel={hotel} key={id} image={image} />
      })}
    </div>
  )
}
