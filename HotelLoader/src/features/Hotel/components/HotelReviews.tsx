import React, { useMemo } from 'react'
import { Review, Reviews } from '../types/types'
import HotelReview from './HotelReview'

const HotelReviews: React.FC<{ reviews: Reviews }> = ({ reviews }) => {
  const reviewCollection = useMemo(
    () => reviews?.reviewCollection?.items || [],
    [reviews]
  )

  return (
    <div className='review-list'>
      {reviewCollection.map((review: Review, index: number) => (
        <div key={review.sys.id}>
          <HotelReview review={review} />
          {index < reviewCollection.length - 1 && (
            <div className='horizontal-divider' />
          )}
        </div>
      ))}
    </div>
  )
}

export default HotelReviews
