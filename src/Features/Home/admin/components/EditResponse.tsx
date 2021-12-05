import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Modal from 'react-native-modal' //@ts-ignore
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import Colors from '../../../../utilities/colors'
import Button from '../../../../components/AppButton'
import Stars from '../../../../components/AppStars'
import styles from '../styles/EditResponse'

export interface EditResponseProps {
  customerResp: string
  ownerResp?: string
  isVisible: boolean | undefined
  ratings: number
  onEdit: (comments: string, ownerReply: string, ratings: number) => void
  onDismiss: () => void
}

const EditResponse: React.FC<EditResponseProps> = ({
  customerResp,
  ownerResp,
  isVisible,
  onDismiss,
  ratings,
  onEdit,
}: EditResponseProps) => {
  const [customerResponse, setCustResponse] = useState(customerResp)
  const [ownerResponse, setOwnerResponse] = useState(ownerResp ?? '')
  const [selectedStars, setSelectedStars] = useState(ratings)

  const onSave = () => {
    onEdit(customerResponse, ownerResponse, selectedStars)
  }

  return (
    <KeyboardAwareScrollView>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onDismiss}
        backdropOpacity={0.5}
        hasBackdrop
        useNativeDriver={false}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Customer Review</Text>
          <TextInput
            testID="customerRespId"
            autoFocus
            blurOnSubmit
            placeholder="Enter Customer response"
            style={styles.textInp}
            value={customerResponse}
            onChangeText={(text) => setCustResponse(text)}
            multiline
          />
          <Text style={styles.title}>Ratings</Text>
          <View style={styles.stars}>
            <Stars
              testID="star"
              selectedStars={selectedStars}
              onSelection={(star) => setSelectedStars(star)}
              selectable
              selectedColor={Colors.appOrange}
            />
          </View>
          <Text style={styles.title}>Owner Response</Text>
          <TextInput
            testID="ownerRespId"
            placeholder="Enter Owner response"
            style={styles.textInp}
            value={ownerResponse}
            onChangeText={(text) => setOwnerResponse(text)}
            multiline
          />
          <View style={styles.btnWrapper}>
            <Button
              testID="cancel"
              title={'Cancel'}
              onPress={onDismiss}
              customStyle={styles.cancelBtn}
              textColor={Colors.black}
            />
            <Button
              testID="save"
              title={'Save'}
              disabled={!customerResponse || !selectedStars}
              onPress={onSave}
              customStyle={styles.yesBtn}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  )
}

export default EditResponse
