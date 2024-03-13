import HotelList from '../components/HotelList'
import { useHotelListQuery } from '../hooks/useHotelListQuery'

export const HotelFinder = () => {
  const { hotels, images, loadHotels } = useHotelListQuery()

  return (
    <div className='container'>
      <div className='loadHotels'>
        <button onClick={loadHotels}>Load Hotels</button>
      </div>
      {hotels && <HotelList hotels={hotels} images={images} />}
    </div>
  )
}
