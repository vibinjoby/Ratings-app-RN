import React from 'react'
import { storiesOf } from '@storybook/react-native'

import RestaurantDetails from '.'
import constants from '../../configs/commonConst'

storiesOf('Screens', module).add('RestaurantDetails', () => (
  <RestaurantDetails
    title="Pizzeria"
    onAddReview={() => console.log('add clicked')}
    restaurantImg={{ uri: constants.DUMMY_PIC }}
    reviews={[
      {
        reviewerName: 'vibin',
        comments:
          'Good food with good price Good food with good price Good food with good price Good food with good price',
        ratings: 4,
        visitDate: '20 Jun 2021',
      },
      {
        reviewerName: 'vibin',
        comments:
          'Good food with good price Good food with good price Good food with good price Good food with good price',
        ratings: 4,
        visitDate: '20 Jun 2021',
      },
    ]}
  />
))
