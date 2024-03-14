import React, { useMemo } from 'react'
import './Hotel.css'
import HotelReviews from './HotelReviews'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Rating from './Rating'
import HotelPrice from './HotelPrice'
import { germanDateFormat } from '../../../utils'
import { HotelData } from '../types/types'
import { useReviewQuery } from '../hooks/useReviewQuery'
import StatusIndicator from './StatusIndicator'

const Hotel: React.FC<{ hotel: HotelData }> = ({ hotel }) => {
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
    imagesCollection,
  } = hotel

  // Memoize expensive computations
  const hotelDescription = useMemo(
    () => documentToPlainTextString(description.json),
    [description.json]
  )
  const hotelImage = useMemo(
    () => imagesCollection?.items[0],
    [imagesCollection]
  )

  const { error, showReviews, reviews, loadReviews } = useReviewQuery(sys.id)

  return (
    <div className='hotelContainer'>
      <div className='hotelMainInformation'>
        <div className='hotelImageContainer'>
          <img src={hotelImage?.url} alt={hotelImage?.title} />
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
            <div className='rowRightAligned'>
              <HotelPrice price={price} />
              <div>
                {germanDateFormat(startDate)} - {germanDateFormat(endDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && <StatusIndicator type='error' message={error.message} />}
      {reviews && showReviews && <HotelReviews reviews={reviews} />}
    </div>
  )
}

export default Hotel
