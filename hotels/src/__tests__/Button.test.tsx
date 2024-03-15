/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../features/Hotel/components/Button'
// Unit Test
test('Button component renders correctly', () => {
  const onClickMock = jest.fn()
  const { getByText } = render(
    <Button action={onClickMock} label='Button test' />
  )

  const buttonElement = getByText('Button test')
  expect(buttonElement).toBeInTheDocument()

  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalledTimes(1)
})
