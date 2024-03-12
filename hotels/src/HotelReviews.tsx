import { useQuery } from "@apollo/client"
import { GET_REVIEWS } from "./queries"
import { HotelId } from "./interfaces"

export const HotelReviews: React.FC<{ hotelId: HotelId }> = ({ hotelId }) => {
    const { loading, error, data, refetch } = useQuery(GET_REVIEWS, {
    })

    const loadReviews = () => {
        refetch();
    };

    if (loading) return <p>Loading reviews...</p>
    if (error) return <p>Error: {error.message}</p>

    const filteredReviews = data?.reviewCollection.items.filter((review: { hotel: { sys: { id: string } } }) => review.hotel.sys.id === hotelId.sys.id)
    console.log(filteredReviews)

    return (
        <div>
            <button onClick={loadReviews}>REVIEWS</button>
            {filteredReviews.map((review: any, index: number) => {
                return <h1>REVIEW {index + 1}</h1>
            })}
        </div>
    )
}