import { useQuery } from "@apollo/client"
import { GET_HOTEL } from "./queries"
import { HotelID } from "./interfaces"
import { HotelReviews } from "./HotelReviews"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Rating } from "./Rating";
import { HotelPrice } from "./HotelPrice";
import { germanDateFormat } from "./utils";

export const Hotel: React.FC<{ hotelId: HotelID }> = ({ hotelId }) => {
    const { loading, error, data } = useQuery(GET_HOTEL, {
        variables: { hotelId: hotelId.sys.id }
    })

    if (loading || !data) return <p>Loading reviews...</p>
    if (error) return <p>Error: {error.message}</p>

    const { hotel } = data
    const { name, rating, city, country, price, startDate, endDate, description } = hotel
    const hotelDescription = documentToPlainTextString(description.json)

    return (
        <div>
            <div>
                <img height={50} src="https://images.ctfassets.net/gyfunrv4a4ak/1w7Py3vo0TCGzxDRGkDsFi/3f68a66c16ff622ccc7c41dab477fd31/003_hotelmenara_pool3_rscdlp.webp" alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <h1>{name}</h1>
                        <h3>{city} - {country}</h3>
                    </div>
                    <div>
                        <Rating rating={rating} />
                    </div>
                </div>
                <div>
                    <p>{hotelDescription}</p>
                </div>
                <div>
                    <div>
                        <HotelReviews hotelId={hotelId} />
                    </div>
                    <div>
                        <HotelPrice price={price} />
                        <div>{germanDateFormat(startDate)} - {germanDateFormat(endDate)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}