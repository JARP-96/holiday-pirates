import { useLazyQuery } from '@apollo/client'
import { GET_HOTELS } from '../graphql/queries'
import { useEffect, useState } from 'react'

export const useHotelListQuery = () => {
    const [hotels, setHotels] = useState(null)

    const [fetchHotelsData, { loading, error, data: hotelsData }] = useLazyQuery(GET_HOTELS)

    useEffect(() => {
        if (hotelsData) {
            setHotels(hotelsData)
        }
    }, [hotelsData])

    const loadHotels = () => {
        fetchHotelsData()
    }

    return {
        loading,
        error,
        hotels,
        loadHotels,
    }
}
