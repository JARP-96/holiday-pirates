import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

export const useReviewQuery = (hotelId: string) => {
  const [showReviews, setShowReviews] = useState(false)
  const [reviews, setReviews] = useState(null)

  const [fetchData, { loading, error, data }] = useLazyQuery(GET_REVIEWS, {
    variables: { hotelId },
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

  /* if (loading)
    return <StatusIndicator message='Loading reviews...' type='loading' />
  if (error) return <StatusIndicator message={error.message} type='error' /> */

  return {
    loading,
    error,
    showReviews,
    reviews,
    loadReviews,
  }
}
