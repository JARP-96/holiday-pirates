/* eslint-disable testing-library/prefer-screen-queries */

// MyComponent.test.js
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import HotelList from '../features/Hotel/components/HotelList'
import { useHotelListQuery } from '../features/Hotel/hooks/useHotelListQuery'
import { Hotels } from '../features/Hotel/types/types'

// Integration tests

const mockHotelList: Hotels = {
  hotelCollection: {
    items: [
      {
        sys: {
          id: '123',
        },
        description: {
          json: {
            data: {},
            content: [],
            nodeType: 'document',
          },
        },
        name: 'HOTEL A',
        rating: 0,
        city: 'HAMBURG',
        country: 'DEUTSCHLAND',
        price: {
          value: '999',
          symbol: '$',
          currency: 'EUR',
        },
        startDate: '01.01.2025',
        endDate: '02.02.2025',
        imagesCollection: {
          items: [
            {
              title: 'test image',
              url: 'https://t.ly/ceXlI',
            },
          ],
        },
      },
      {
        sys: {
          id: '456',
        },
        description: {
          json: {
            data: {},
            content: [],
            nodeType: 'document',
          },
        },
        name: 'HOTEL B',
        rating: 0,
        city: 'BERLIN',
        country: 'DEUTSCHLAND',
        price: {
          value: '999',
          symbol: '$',
          currency: 'EUR',
        },
        startDate: '01.01.2025',
        endDate: '02.02.2025',
        imagesCollection: {
          items: [
            {
              title: 'test image',
              url: 'https://t.ly/ceXlI',
            },
          ],
        },
      },
    ],
  },
}
jest.mock('../features/Hotel/hooks/useHotelListQuery', () => ({
  useHotelListQuery: jest.fn(),
}))

const mockUseHotelListQuery = useHotelListQuery as jest.MockedFunction<
  typeof useHotelListQuery
>

beforeEach(() => {
  mockUseHotelListQuery.mockReturnValue({
    loading: false,
    error: undefined,
    hotels: mockHotelList,
    loadHotels: jest.fn(),
  })
})

test('renders hotel list from GraphQL query', async () => {
  const { getByText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <HotelList hotels={mockHotelList} />
    </MockedProvider>
  )

  await waitFor(() => {
    expect(getByText('HOTEL A')).toBeInTheDocument()
  })
  await waitFor(() => {
    expect(getByText('HOTEL B')).toBeInTheDocument()
  })
})
