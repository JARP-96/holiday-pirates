import { useLazyQuery } from '@apollo/client'
import { GET_HOTELS } from '../graphql/queries'

export const useHotelListQuery = () => {
    const [fetchHotelsData, { loading, error, data: hotels }] = useLazyQuery(GET_HOTELS)

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
