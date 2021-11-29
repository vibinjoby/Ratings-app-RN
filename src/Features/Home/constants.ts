import * as yup from 'yup'

export const ScreenNames = {
  CUSTOMER_HOME: 'CustomerHome',
  OWNER_HOME: 'OwnerHome',
  ADMIN_HOME: 'AdminHome',
  ADD_RESTAURANT: 'AddRestaurant',
  RESTAURANT_DETAILS_NAV: 'RestaurantDetailsNav',
  ALL_USERS: 'AllUsers',
  ALL_RESTAURANTS: 'AllRestaurants',
  ALL_REVIEWS: 'AllReviews',
}

export const AddRestaurantValidationSchema = yup.object().shape({
  restaurantName: yup.string().label('Restaurant Name').required(),
  address: yup.string().label('Address').required(),
  email: yup.string().email().label('Email').required(),
  contactNumber: yup
    .string()
    .label('Contact Number')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    )
    .required(),
})
