import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

export const useReviewQuery = (hotelId: string) => {

  const [showReviews, setShowReviews] = useState(false)

  const [fetchData, { error, data: reviews }] = useLazyQuery(GET_REVIEWS, {
    variables: { hotelId },
  })

  const loadReviews = () => {
    fetchData()
    setShowReviews(!showReviews)
  }

  return {
    error,
    showReviews,
    reviews,
    loadReviews,
  }
}
