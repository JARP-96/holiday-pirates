import { useLazyQuery } from '@apollo/client'
import { GET_HOTELS, GET_IMAGES } from '../graphql/queries'
import { useEffect, useState } from 'react'

export const useHotelListQuery = () => {
    const [hotels, setHotels] = useState(null)
    const [images, setImages] = useState(null)

    const [fetchHotelsData, { loading: hotelsLoading, error: hotelsError, data: hotelsData }] = useLazyQuery(GET_HOTELS)
    const [getchImagesData, { data: imagesData }] = useLazyQuery(GET_IMAGES)

    /* if (loading)
      return <StatusIndicator message='Loading hotel list...' type='loading' />
    if (error) return <StatusIndicator message={error.message} type='error' /> */

    useEffect(() => {
        if (hotelsData) {
            setHotels(hotelsData)
        }
        if (imagesData) {
            setImages(imagesData)
        }
    }, [hotelsData, imagesData])

    const loadHotels = () => {
        fetchHotelsData()
        getchImagesData()
    }

    return {
        hotelsLoading,
        hotelsError,
        hotels,
        images,
        loadHotels,
    }
}
