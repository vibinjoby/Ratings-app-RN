import React from 'react'
import { Text, View } from 'react-native'
import { FormikErrors, FormikHandlers, FormikValues } from 'formik'

import Button from '../../../../components/Button'
import styles from '../styles/AddRestaurantForm'
import TextField from '../../../../components/TextField'
import { RestaurantType } from '../containers/AddRestaurant'

export interface AddRestaurantFormProps {
  onSave: (vals: any) => void
  values: FormikValues
  errors: FormikErrors<RestaurantType>
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
  isValid: boolean
  dirty: boolean
}

const data = [
  { key: 1, testID: 'restaurantName', placeholder: 'Restaurant Name', name: 'restaurantName' },
  {
    key: 2,
    testID: 'address',
    placeholder: 'Address',
    name: 'address',
  },
  {
    key: 3,
    testID: 'email',
    placeholder: 'Email',
    name: 'email',
    keyboardType: 'email-address',
  },
  {
    key: 4,
    testID: 'ctNumber',
    placeholder: 'Contact Number',
    name: 'contactNumber',
  },
]

const AddRestaurantForm = ({
  onSave,
  values,
  handleChange,
  isValid,
  dirty,
}: AddRestaurantFormProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>Create new restaurant</Text>

    {data.map((item) => (
      <TextField
        inputValue={values[item.name]}
        textHint={item.placeholder}
        testID={item.testID}
        key={item.key.toString()}
        onInputChange={handleChange}
        containerStyle={styles.textInp}
      />
    ))}
    <Button
      testID="saveBtn"
      disabled={!isValid || !dirty}
      title="Save"
      onPress={() => onSave(values)}
      customStyle={styles.saveBtn}
    />
  </View>
)

export default React.memo(AddRestaurantForm)
