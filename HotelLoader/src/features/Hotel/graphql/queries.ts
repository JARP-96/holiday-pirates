import { gql } from '@apollo/client'

export const GET_HOTELS = gql`
query getHotelCollection {
  hotelCollection (limit: 5) {
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
      imagesCollection (limit: 1) {
        items {
          title
          url
        }
      }
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
