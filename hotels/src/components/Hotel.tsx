import './Hotel.css'
import { HotelReviews } from './HotelReviews'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Rating } from './Rating'
import { HotelPrice } from './HotelPrice'
import { germanDateFormat } from '../utils'
import { HotelData } from '../interfaces/interfaces'
import { useReviewQuery } from '../hooks/useReviewQuery'

export const Hotel: React.FC<{ hotel: HotelData; image?: any }> = ({
  hotel,
  image,
}) => {
  const {
    sys,
    name,
    rating,
    city,
    country,
    price,
    startDate,
    endDate,
    description,
  } = hotel

  const hotelDescription = documentToPlainTextString(description.json)

  const { showReviews, reviews, loadReviews } = useReviewQuery(sys.id)

  return (
    <div className='hotelContainer'>
      <div className='hotelMainInformation'>
        <div className='hotelImageContainer'>
          <img src={image.url} alt={image.title} />
        </div>
        <div className='hotelInformation'>
          <div className='edgeElements'>
            <div>
              <h1>{name}</h1>
              <h3 className='location'>
                {city} - {country}
              </h3>
            </div>
            <div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className='hotelDescription'>
            <p>{hotelDescription}</p>
          </div>
          <div className='edgeElements'>
            <div>
              <button onClick={loadReviews}>
                {showReviews ? 'Hide reviews' : 'Show reviews'}
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <HotelPrice price={price} />
              <div>
                {germanDateFormat(startDate)} - {germanDateFormat(endDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {reviews && showReviews && <HotelReviews reviews={reviews} />}
    </div>
  )
}
