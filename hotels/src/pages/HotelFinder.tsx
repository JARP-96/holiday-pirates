import './HotelFinder.css'
import HotelList from '../features/Hotel/components/HotelList'
import StatusIndicator from '../features/Hotel/components/StatusIndicator'
import { useHotelListQuery } from '../features/Hotel/hooks/useHotelListQuery'
import Button from '../features/Hotel/components/Button'

export const HotelFinder: React.FC = () => {
  const { loading, error, hotels, loadHotels } = useHotelListQuery()

  const Status = () => {
    if (loading)
      return <StatusIndicator type='loading' message='Loading hotels...' />
    else if (error)
      return <StatusIndicator type='error' message={error.message} />
    else return <></>
  }

  return (
    <div>
      <div className='container'>
        <div className='hotel-load-button center'>
          <Button action={loadHotels} label='Load Hotels' />
        </div>
        <Status />
        <HotelList hotels={hotels} />
      </div>
      <footer>
        A <b>Jorge Antonio Ramírez Padilla</b> Assessment Test. Made with 🧡 for{' '}
        <b>HolidayPirates</b>.
      </footer>
    </div>
  )
}
export default HotelFinder
