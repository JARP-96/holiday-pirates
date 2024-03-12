import { useLazyQuery } from '@apollo/client'
import { GET_REVIEWS } from './queries'
import { HotelID, Review } from './interfaces'
import { HotelReview } from './HotelReview'
import { useEffect, useState } from 'react'
import { StatusIndicator } from './StatusIndicator'

export const HotelReviews: React.FC<{ hotelId: HotelID }> = ({ hotelId }) => {
  const [showReviews, setShowReviews] = useState(false)
  const [reviews, setReviews] = useState(null)

  // Manually Trigger Query execution
  const [fetchData, { loading, error, data }] = useLazyQuery(GET_REVIEWS, {
    variables: { hotelId: hotelId.sys.id },
  })

  useEffect(() => {
    if (data) {
      setReviews(data)
    }
  }, [data])

  const loadReviews = () => {
    if (!reviews) {
      fetchData()
    }
    setShowReviews(!showReviews)
  }

  if (loading)
    return <StatusIndicator message='Loading reviews...' type='loading' />
  if (error) return <StatusIndicator message={error.message} type='error' />

  return (
    <div>
      <button onClick={loadReviews}>
        {showReviews ? 'Hide reviews' : 'Show reviews'}
      </button>
      <div className='hotelReviews'>
        {showReviews &&
          data?.reviewCollection.items.map((review: Review, index: number) => {
            const id = review.sys.id
            return (
              <div key={id}>
                <HotelReview review={review} />
                {index < data.reviewCollection.items.length - 1 && (
                  <div className='divider' />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
