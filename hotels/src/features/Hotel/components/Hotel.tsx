import React, { useMemo } from 'react'
import './Hotel.css'
import HotelReviews from './HotelReviews'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Rating from './HotelRating'
import HotelPrice from './HotelPrice'
import { setGermanDateFormat } from '../../../utils'
import { HotelData } from '../types/types'
import { useReviewQuery } from '../hooks/useReviewQuery'
import StatusIndicator from './StatusIndicator'
import Button from './Button'

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
  const dateRange = `${setGermanDateFormat(startDate)} -
  ${setGermanDateFormat(endDate)}`

  return (
    <div className='hotel-card-container'>
      <div className='hotel-main-info'>
        <div className='hotel-image-container'>
          <div className='image-container'>
            <img src={hotelImage?.url} alt={hotelImage?.title} />
          </div>
        </div>
        <div className='hotel-info'>
          <div className='edge-elements'>
            <div>
              <h1>{name}</h1>
              <h3 className='location-info'>
                {city} - {country}
              </h3>
            </div>
            <div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className='hotel-description'>
            <p>{hotelDescription}</p>
          </div>
          <div className='edge-elements'>
            <div>
              <Button
                action={loadReviews}
                label={showReviews ? 'Hide reviews' : 'Show reviews'}
              />
            </div>
            <div className='row-right-aligned'>
              <HotelPrice price={price} />
              <div>{dateRange}</div>
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
