import { useQuery } from "@apollo/client"
import { GET_HOTEL } from "./queries"
import { HotelId } from "./interfaces"
import { HotelReviews } from "./HotelReviews"

export const Hotel: React.FC<{ hotelId: HotelId }> = ({ hotelId }) => {
    const { loading, error, data, refetch } = useQuery(GET_HOTEL, {
        variables: { hotelId: hotelId.sys.id }
    })

    if (loading || !data) return <p>Loading reviews...</p>
    if (error) return <p>Error: {error.message}</p>

    const { hotel } = data
    const { name, rating, city, country, price, startDate, endDate } = hotel
    console.log(hotelId.sys.id)
    return (
        <div>
            <h1>{name}</h1>
            <HotelReviews hotelId={hotelId} />
        </div>
    )
}