import React from 'react'
import { Hotel } from './Hotel'
import { HotelData, Hotels } from '../interfaces/interfaces'

const HotelList: React.FC<{ hotels: Hotels; images: any }> = ({
  hotels,
  images,
}) => {
  const hotelCollection = hotels ? hotels.hotelCollection.items : []
  console.log({ images })
  return (
    <div>
      {hotelCollection.map((hotel: HotelData, index: number) => {
        const id = hotel.sys.id
        const image = images.assetCollection.items[index]
        return <Hotel hotel={hotel} key={id} image={image} />
      })}
    </div>
  )
}

export default HotelList
