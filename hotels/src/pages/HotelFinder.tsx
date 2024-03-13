import { HotelList } from '../components/HotelList'
import { StatusIndicator } from '../components/StatusIndicator'
import { useHotelListQuery } from '../hooks/useHotelListQuery'

export const HotelFinder = () => {
  const { loading, error, hotels, images, loadHotels } = useHotelListQuery()

  const Status = () => {
    if (loading)
      return <StatusIndicator type='loading' message='Loading hotels...' />
    else if (error)
      return <StatusIndicator type='error' message={error.message} />
    else return <></>
  }

  return (
    <div className='container'>
      <div className='loadHotels center'>
        <button onClick={loadHotels}>Load Hotels</button>
      </div>
      <Status />
      {hotels && images && <HotelList hotels={hotels} images={images} />}
    </div>
  )
}
