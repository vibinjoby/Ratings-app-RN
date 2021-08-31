import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AppDatePicker from '../../components/AppDatePicker'
import Button from '../../components/Button'
import Stars from '../../components/Stars'
import { RootState } from '../../store'
import {
  fetchRestaurants,
  resetRestaurantData,
  submitReview,
} from '../../store/reducers/restaurant'
import Colors from '../../utilities/colors'
import styles from './styles'

const AddReview: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const restaurantId = useSelector(
    (state: RootState) => state.restaurants.restaurantDetails.restaurantData._id,
  )
  const [selectedStars, setSelectedStars] = useState(0)
  const [comments, setComments] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onDone = () => {
    navigation.goBack()
    dispatch(submitReview(token, restaurantId, selectedStars, visitDate, comments))
    dispatch({ type: resetRestaurantData.type })
    dispatch(fetchRestaurants(token, 1))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>How was your experience</Text>
      <Text style={styles.subtitleTxt}>Rate your food, it is important for us</Text>
      <View style={styles.starWrapper}>
        <Stars
          selectable
          spacing={styles.starSpacing}
          starHeight={31}
          selectedColor={Colors.lightOrange}
          selectedStars={selectedStars}
          onSelection={(star) => setSelectedStars(star)}
        />
      </View>
      <TextInput
        placeholder={'Type Something'}
        multiline
        style={styles.textInp}
        value={comments}
        onChangeText={(text) => setComments(text)}
      />
      <Text style={styles.textHint}>Minimum 10 characters</Text>
      <AppDatePicker
        label={'Visit Date'}
        containerStyle={styles.datePicker}
        onDateSelection={(date) => setVisitDate(date)}
      />
      <Button
        customStyle={styles.btn}
        title="Done"
        disabled={selectedStars < 1 || comments.length < 10 || !visitDate}
        onPress={onDone}
      />
    </View>
  )
}

export default AddReview
