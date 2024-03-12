import { useLazyQuery } from "@apollo/client"
import { GET_REVIEWS } from "./queries"
import { HotelID } from "./interfaces"
import { HotelReview } from "./HotelReview"
import { useEffect, useState } from "react"

export const HotelReviews: React.FC<{ hotelId: HotelID }> = ({ hotelId }) => {
    const [showReviews, setShowReviews] = useState(false)
    const [reviews, setReviews] = useState(null)

    // Manually Trigger Query execution
    const [fetchData, { loading, error, data }] = useLazyQuery(GET_REVIEWS, {
        variables: { hotelId: hotelId.sys.id }
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
    };

    if (loading) return <p>Loading reviews...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <button onClick={loadReviews}>{showReviews ? "Hide Reviews" : "Show Reviews"}</button>
            {showReviews && data?.reviewCollection.items.map((review: any) => {
                const id = review.sys.id
                return <HotelReview review={review} key={id} />
            })}
        </div>
    )
}