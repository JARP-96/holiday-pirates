export interface Sys {
    id: string;
}

export interface HotelID {
    sys: Sys
}

export interface Price {
    value: string
    symbol: string
    currency: string
}

export interface ReviewComment {
    json: any;
}

export interface Customer {
    firstName: string;
    lastName: string;
}

export interface Review {
    title: string;
    rating: number;
    feedback: string;
    comment: ReviewComment;
    customer: Customer;
    sys: Sys;
}

export interface Data {
    review: Review;
}
