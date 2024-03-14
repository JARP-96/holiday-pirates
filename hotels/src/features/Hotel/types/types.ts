type Sys = {
  id: string
}

// Hotel types

export type Price = {
  value: string
  symbol: string
  currency: string
}

type JSON = {
  json: any
}

export type Image = {
  title: string
  url: string
}

export type ImagesCollection = {
  items: Image[]
}

export type HotelData = {
  sys: Sys
  name: string
  rating: number
  city: string
  country: string
  price: Price
  startDate: string
  endDate: string
  description: JSON
  imagesCollection: ImagesCollection
}

export type Hotels = {
  hotelCollection: {
    items: HotelData[]
  }
}

// Review types

type Customer = {
  firstName: string
  lastName: string
}

export type Review = {
  sys: Sys
  title: string
  rating: number
  feedback: string
  comment: JSON
  customer: Customer
}

export type Reviews = {
  reviewCollection: {
    items: Review[]
  }
}
