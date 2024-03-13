import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Review } from '../interfaces/interfaces'
import './Review.css'

export const HotelReview: React.FC<{ review: Review }> = ({ review }) => {
  const { customer, comment, feedback } = review
  const { firstName, lastName } = customer
  const reviewComment = documentToPlainTextString(comment.json)

  return (
    <div className='review'>
      <div>
        <div className='reviewFeedback center'>
          <span>{feedback === 'positive' ? '+' : '-'}</span>
        </div>
      </div>
      <div className='reviewContent'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{reviewComment}</p>
      </div>
    </div>
  )
}
