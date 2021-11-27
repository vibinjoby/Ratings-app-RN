import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import ReviewBlock from './component'

describe('ReviewBlock', () => {
  const MOCK_SEND = jest.fn()
  const MOCK_EDIT_SAVE = jest.fn()
  const MOCK_OPTION_PRESS = jest.fn()
  const MOCK_ID = 123
  const MOCK_REVIEW_NAME = 'VIBIN'
  const MOCK_COMMENTS = 'This is not too bad at all'
  const MOCK_RATINGS = 3
  const MOCK_VISIT_DT = '20 Jun 2021'
  const MOCK_OWNER_REPLY = 'mock reply'

  it('should render', () => {
    const { toJSON } = render(
      <ReviewBlock
        reviewId={MOCK_ID}
        reviewerName={MOCK_REVIEW_NAME}
        comments={MOCK_COMMENTS}
        ratings={MOCK_RATINGS}
        visitDate={MOCK_VISIT_DT}
        onSend={MOCK_SEND}
        onEditSave={MOCK_EDIT_SAVE}
        onOptionPress={MOCK_OPTION_PRESS}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should show all values & click reply button', () => {
    const { getByTestId } = render(
      <ReviewBlock
        reviewId={MOCK_ID}
        reviewerName={MOCK_REVIEW_NAME}
        comments={MOCK_COMMENTS}
        ratings={MOCK_RATINGS}
        visitDate={MOCK_VISIT_DT}
        onSend={MOCK_SEND}
        onEditSave={MOCK_EDIT_SAVE}
        onOptionPress={MOCK_OPTION_PRESS}
        shouldReply
      />,
    )
    expect(getByTestId('reviewerName').props.children).toBe(MOCK_REVIEW_NAME)
    expect(getByTestId('visitDt').props.children).toBe('20th Jun,2021')
    expect(getByTestId('comments').props.children).toBe(MOCK_COMMENTS)

    // Pressing the reply button
    fireEvent.press(getByTestId('replyBtn'))
    // Show reply review component now
    fireEvent.changeText(getByTestId('replyInput'))
    fireEvent.press(getByTestId('sendBtn'))
  })

  it('should show owners reply', () => {
    const { getByTestId } = render(
      <ReviewBlock
        reviewId={MOCK_ID}
        reviewerName={MOCK_REVIEW_NAME}
        comments={MOCK_COMMENTS}
        ratings={MOCK_RATINGS}
        visitDate={MOCK_VISIT_DT}
        ownerReply={MOCK_OWNER_REPLY}
        onSend={MOCK_SEND}
        onEditSave={MOCK_EDIT_SAVE}
        onOptionPress={MOCK_OPTION_PRESS}
      />,
    )
    expect(getByTestId('ownerReply').props.children).toBe(MOCK_OWNER_REPLY)
  })

  it('should show three vertical dots and be clickable', () => {
    const { getByTestId } = render(
      <ReviewBlock
        reviewId={MOCK_ID}
        reviewerName={MOCK_REVIEW_NAME}
        comments={MOCK_COMMENTS}
        ratings={MOCK_RATINGS}
        visitDate={MOCK_VISIT_DT}
        ownerReply={MOCK_OWNER_REPLY}
        onSend={MOCK_SEND}
        onEditSave={MOCK_EDIT_SAVE}
        onOptionPress={MOCK_OPTION_PRESS}
        showThreeDots
      />,
    )
    expect(getByTestId('threeDots')).toBeDefined()
    fireEvent.press(getByTestId('threeDots'))
  })
})
