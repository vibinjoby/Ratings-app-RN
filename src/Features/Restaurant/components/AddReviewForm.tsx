import React from 'react'
import { ButtonProps, Text, TextInput, View } from 'react-native'
import { FormikErrors, FormikHandlers, FormikValues } from 'formik'

import AppDatePicker from '../../../components/AppDatePicker'
import Button from '../../../components/AppButton'
import Stars from '../../../components/AppStars'
import Colors from '../../../utilities/colors'
import styles from '../styles/AddReviewForm'

interface AddReviewFormProps {
  onSave: ButtonProps['onPress']
  values: FormikValues
  errors: FormikErrors<FormikValues>
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
}

const AddReviewForm = ({ onSave, values, handleChange }: AddReviewFormProps) => {
  return (
    <View style={styles.container} testID="container">
      <Text style={styles.titleTxt}>How was your experience</Text>
      <Text style={styles.subtitleTxt}>Rate your food, it is important for us</Text>
      <View style={styles.starWrapper} testID="starWrapper">
        <Stars
          testID="stars"
          selectable
          spacing={styles.starSpacing}
          starHeight={31}
          selectedColor={Colors.lightOrange}
          selectedStars={values['ratings']}
          onSelection={handleChange('ratings')}
        />
      </View>
      <TextInput
        testID="comments"
        placeholder={'Type Something'}
        multiline
        style={styles.textInp}
        value={values['comments']}
        onChangeText={handleChange('comments')}
      />
      <Text style={styles.textHint}>Minimum 10 characters</Text>
      <AppDatePicker
        label={'Visit Date'}
        containerStyle={styles.datePicker}
        onDateSelection={handleChange('visitDate')}
      />
      <Button
        testID="doneBtn"
        customStyle={styles.btn}
        title="Done"
        disabled={values['ratings'] < 1 || values['comments'].length < 10 || !values['visitDate']}
        onPress={onSave}
      />
    </View>
  )
}

export default AddReviewForm
