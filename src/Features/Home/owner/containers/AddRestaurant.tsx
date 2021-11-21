import React from 'react'
import { useNavigation } from '@react-navigation/native'

import AddRestaurantForm from '../components/AddRestaurantForm'
import userInfoVars from '../../../../store'
import { useFormik } from 'formik'
import { AddRestaurantValidationSchema } from '../../constants'

export interface RestaurantType {
  restaurantName: string
  address: string
  email: string
  contactNumber: string
}

const AddRestaurant: React.FC = () => {
  const { token } = userInfoVars()
  const navigation = useNavigation()
  const { values, errors, isValid, dirty, setFieldValue } = useFormik<RestaurantType>({
    initialValues: {
      restaurantName: '',
      address: '',
      email: '',
      contactNumber: '',
    },
    validationSchema: AddRestaurantValidationSchema,
    onSubmit: () => {},
  })

  const handleSave = ({ restaurantName, address, email, contactNumber }: RestaurantType) => {
    if (!restaurantName || !address || !email || !contactNumber) return

    navigation.goBack()
  }

  return (
    <AddRestaurantForm
      onSave={handleSave}
      values={values}
      errors={errors}
      handleChange={(fieldName: string) => (e: React.ChangeEvent) => {
        setFieldValue(fieldName, e)
      }}
      isValid={isValid}
      dirty={dirty}
    />
  )
}

export default AddRestaurant
