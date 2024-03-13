import { gql } from '@apollo/client'

export const GET_HOTELS = gql`
  query getHotelCollection {
    hotelCollection {
      items {
        sys {
          id
        }
        name
        rating
        city
        country
        price
        startDate
        endDate
        description {
          json
        }
      }
    }
  }
`

export const GET_IMAGES = gql`
query getAssetCollection {
  assetCollection (limit: 5){
    items {
      title
      url
    }
  }
}
`

export const GET_REVIEWS = gql`
  query GetReviewByHotelID($hotelId: String!) {
    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {
      items {
        sys {
          id
        }
        feedback
        comment {
          json
        }
        customer {
          firstName
          lastName
        }
      }
    }
  }
`
