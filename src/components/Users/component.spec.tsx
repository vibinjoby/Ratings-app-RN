import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Users from './component'

describe('Users', () => {
  const MOCK_FN = jest.fn()
  const MOCK_ID = '123'
  const MOCK_NAME = 'name'
  const MOCK_USER_TYPE = 'usertype'

  it('should render', () => {
    const { toJSON } = render(
      <Users id={MOCK_ID} name={MOCK_NAME} typeOfUser={MOCK_USER_TYPE} onDelete={MOCK_FN} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should display all values and should be deletable', () => {
    const { getByTestId } = render(
      <Users
        id={MOCK_ID}
        index={0}
        name={MOCK_NAME}
        typeOfUser={MOCK_USER_TYPE}
        onDelete={MOCK_FN}
      />,
    )
    expect(getByTestId('name').props.children).toBe(MOCK_NAME)
    expect(getByTestId('userType').props.children).toBe(MOCK_USER_TYPE)
    fireEvent.press(getByTestId('deleteIc0'))
    expect(MOCK_FN).toBeCalledWith(MOCK_ID)
  })
})
