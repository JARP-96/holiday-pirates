import React from 'react'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Review } from '../types/types'
import './Review.css'

export const HotelReview: React.FC<{ review: Review }> = ({
  review: { customer, comment, feedback },
}) => {
  const reviewComment = React.useMemo(
    () => documentToPlainTextString(comment.json),
    [comment]
  )

  return (
    <div className='review'>
      <div className='reviewFeedback center'>
        {feedback === 'positive' ? '+' : '-'}
      </div>
      <div className='reviewContent'>
        <h2>
          {customer.firstName} {customer.lastName}
        </h2>
        <p>{reviewComment}</p>
      </div>
    </div>
  )
}
