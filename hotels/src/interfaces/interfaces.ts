interface Sys {
  id: string
}

// Hotel Interfaces

export interface Price {
  value: string
  symbol: string
  currency: string
}

interface JSON {
  json: any
}

export interface Image {
  title: string
  url: string
}

export interface Images {
  assetCollection: {
    items: Image[]
  }
}

export interface HotelData {
  sys: Sys
  name: string
  rating: number
  city: string
  country: string
  price: Price
  startDate: string
  endDate: string
  description: JSON
}

export interface Hotels {
  hotelCollection: {
    items: HotelData[]
  }
}

// Review Interfaces

interface Customer {
  firstName: string
  lastName: string
}

export interface Review {
  sys: Sys
  title: string
  rating: number
  feedback: string
  comment: JSON
  customer: Customer
}

export interface Reviews {
  reviewCollection: {
    items: Review[]
  }
}
