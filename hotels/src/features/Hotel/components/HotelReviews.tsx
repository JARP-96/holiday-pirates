import React from 'react'
import { Review, Reviews } from '../types/types'
import { HotelReview } from './HotelReview'

const HotelReviews: React.FC<{ reviews: Reviews }> = ({ reviews }) => {
  const reviewCollection = reviews ? reviews.reviewCollection.items : []

  return (
    <div className='hotelReviews'>
      {reviewCollection.map((review: Review, index: number) => (
        <div key={review.sys.id}>
          <HotelReview review={review} />
          {index < reviewCollection.length - 1 && <div className='divider' />}
        </div>
      ))}
    </div>
  )
}

export default HotelReviews
