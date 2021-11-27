import React from 'react'
import { useFormik } from 'formik'
import { useRoute, useNavigation } from '@react-navigation/native'
import moment from 'moment'

import AddReviewForm from '../components/AddReviewForm'
import { DetailsRouteProps } from '../types'
import { useAddReview, useRestaurantDetails } from '../hooks'
import ApiResult from '../../../components/ApiResult'

const AddReview = () => {
  const route = useRoute<DetailsRouteProps>()
  const navigation = useNavigation()
  const { restaurantId } = route.params
  const { values, errors, setFieldValue } = useFormik({
    initialValues: {
      comments: '',
      ratings: 0,
      visitDate: '',
    },
    onSubmit: () => {},
  })
  const { refetch } = useRestaurantDetails(restaurantId)
  const { onAddRestaurantMutate, loading, error } = useAddReview({
    comments: values['comments'],
    ratings: values['ratings'],
    restaurantId,
    visitDate: moment(values['visitDate'], 'Do MMM,YYYY'),
  })

  const handleSave = async () => {
    await onAddRestaurantMutate()
    refetch()
    navigation.goBack()
  }

  return (
    <ApiResult loading={loading} error={error}>
      <AddReviewForm
        onSave={handleSave}
        values={values}
        errors={errors}
        handleChange={(fieldName: string) => (e: React.ChangeEvent) => {
          setFieldValue(fieldName, e)
        }}
      />
    </ApiResult>
  )
}

export default AddReview
