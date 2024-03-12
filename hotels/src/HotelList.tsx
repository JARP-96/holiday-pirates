import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { Hotel } from './Hotel'
import { GET_HOTELS } from './queries'
import { StatusIndicator } from './StatusIndicator'

const HotelList: React.FC = () => {
  // Manually Trigger Query execution
  const [fetchData, { loading, error, data }] = useLazyQuery(GET_HOTELS)

  if (loading)
    return <StatusIndicator message='Loading hotel list...' type='loading' />
  if (error) return <StatusIndicator message={error.message} type='error' />

  const loadHotels = () => {
    fetchData()
  }

  return (
    <div className='container'>
      <div className='loadHotels'>
        <button onClick={loadHotels}>Load Hotels</button>
      </div>
      <div>
        {data?.hotelCollection.items.map((hotelId: any) => {
          const id = hotelId.sys.id
          return <Hotel hotelId={hotelId} key={id} />
        })}
      </div>
    </div>
  )
}

export default HotelList
