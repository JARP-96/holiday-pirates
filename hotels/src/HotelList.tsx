import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { Hotel } from './Hotel';
import { GET_HOTELS } from './queries';

const HotelList: React.FC = () => {
    // Manually Trigger Query execution
    const [fetchData, { loading, error, data }] = useLazyQuery(GET_HOTELS);

    if (loading) return <p>Loading hotel list...</p>
    if (error) return <p>Error: {error.message}</p>

    const loadHotels = () => {
        fetchData();
    };

    return (
        <>
            <button onClick={loadHotels}>Load Hotels</button>
            {data?.hotelCollection.items.map((hotelId: any, index: number) => (
                <Hotel hotelId={hotelId} key={index} />
            ))}
        </>
    )
}



export default HotelList
