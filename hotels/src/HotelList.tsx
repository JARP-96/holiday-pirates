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
        <div className='container'>
            <button onClick={loadHotels} className='loadHotels'>Load Hotels</button>
            <div>
                {data?.hotelCollection.items.map((hotelId: any) => {
                    const id = hotelId.sys.id
                    return (<Hotel hotelId={hotelId} key={id} />)
                }
                )}
            </div>
        </div>
    )
}



export default HotelList
