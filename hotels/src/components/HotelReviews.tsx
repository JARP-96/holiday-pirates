import { Review, Reviews } from '../interfaces/interfaces'
import { HotelReview } from './HotelReview'

export const HotelReviews: React.FC<{ reviews: Reviews }> = ({ reviews }) => {
  const reviewCollection = reviews ? reviews.reviewCollection.items : []

  return (
    <div className='hotelReviews'>
      {reviewCollection.map((review: Review, index: number) => {
        const id = review.sys.id
        return (
          <div key={id}>
            <HotelReview review={review} />
            {index < reviewCollection.length - 1 && <div className='divider' />}
          </div>
        )
      })}
    </div>
  )
}
