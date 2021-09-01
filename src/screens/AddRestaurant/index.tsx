import React from 'react'
import { KeyboardType, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { Formik } from 'formik'

import Button from '../../components/Button'
import CustomTextInput from '../../components/CustomTextInput'
import styles from './styles'
import { saveRestaurant } from '../../store/reducers/owner'
import { RootState } from '../../store'

type RestaurantType = {
  restaurantName: string
  address: string
  email: string
  contactNumber: string
}

const AddRestaurant: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = [
    { key: 1, placeholder: 'Restaurant Name', name: 'restaurantName' },
    {
      key: 2,
      placeholder: 'Address',
      name: 'address',
    },
    {
      key: 3,
      placeholder: 'Email',
      name: 'email',
      keyboardType: 'email-address',
    },
    {
      key: 4,
      placeholder: 'Contact Number',
      name: 'contactNumber',
    },
  ]

  const handleSave = ({ restaurantName, address, email, contactNumber }: RestaurantType) => {
    if (!restaurantName || !address || !email || !contactNumber) return

    dispatch(saveRestaurant(token, restaurantName, address, contactNumber, email))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new restaurant</Text>

      <Formik
        onSubmit={() => console.log()}
        initialValues={{
          restaurantName: '',
          address: '',
          email: '',
          contactNumber: '',
        }}
        validationSchema={yup.object().shape({
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
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          validateForm,
          dirty,
        }) => (
          <>
            {data.map((item) => (
              <CustomTextInput
                testID="items"
                keyboardType={item.keyboardType as KeyboardType}
                key={item.key.toString()}
                onBlur={() => setFieldTouched(item.name)}
                onFocus={() => validateForm()}
                onChangeText={handleChange(item.name)}
                placeholderTxt={item.placeholder}
                touched={touched}
                name={item.name}
                errors={errors}
                customStyles={styles.textInp}
              />
            ))}
            <Button
              testID="saveBtn"
              disabled={!isValid || !dirty}
              title="Save"
              onPress={() => handleSave(values)}
              customStyle={styles.saveBtn}
            />
          </>
        )}
      </Formik>
    </View>
  )
}

export default AddRestaurant
