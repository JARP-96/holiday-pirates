import React from 'react'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Review } from '../types/types'
import './HotelReview.css'

const HotelReview: React.FC<{ review: Review }> = ({
  review: { customer, comment, feedback },
}) => {
  const reviewComment = React.useMemo(
    () => documentToPlainTextString(comment.json),
    [comment]
  )

  return (
    <div className='single-review'>
      <div className='feedback-badge center'>
        <span>{feedback === 'positive' ? '+' : '-'}</span>
      </div>
      <div className='review-details'>
        <h2>
          {customer.firstName} {customer.lastName}
        </h2>
        <p>{reviewComment}</p>
      </div>
    </div>
  )
}
export default HotelReview
