import { gql } from "@apollo/client";

export const GET_HOTELS = gql`
query getHotelCollection {
  hotelCollection {
    items {
      sys {
        id
      }
    } 
  }
}
`

export const GET_HOTEL = gql`
query getHotel($hotelId: String!) {
    hotel(id: $hotelId) {
      name,
      rating,
      city,
      country,
      price,
      startDate,
      endDate,
      description {
        json
      }
    }
  }`

export const GET_REVIEWS = gql`
query GetReviews {
    reviewCollection {
      items {
        hotel {
          sys {
            id
          }
        }
        feedback
        customer {
          firstName
          lastName
        }
        comment {
          json
        }
      }
    }
  }
`