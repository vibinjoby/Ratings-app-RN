import React from 'react'
import { useNavigation } from '@react-navigation/native'

import AddRestaurantForm from '../components/AddRestaurantForm'
import { useFormik } from 'formik'
import { AddRestaurantValidationSchema } from '../../constants'
import { useAddRestaurant, useOwnerRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'

export interface RestaurantType {
  restaurantName: string
  address: string
  email: string
  contactNumber: string
}

const AddRestaurant: React.FC = () => {
  const navigation = useNavigation()
  const { refetch } = useOwnerRestaurants()
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

  const { onAddRestaurantMutate, loading, error } = useAddRestaurant({
    contactNumber: parseFloat(values['contactNumber']),
    restaurantName: values['restaurantName'],
    address: values['address'],
  })

  const handleSave = async ({ restaurantName, address, email, contactNumber }: RestaurantType) => {
    if (!restaurantName || !address || !email || !contactNumber) return

    await onAddRestaurantMutate()
    refetch()
    navigation.goBack()
  }

  return (
    <ApiResult loading={loading} error={error}>
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
    </ApiResult>
  )
}

export default AddRestaurant
