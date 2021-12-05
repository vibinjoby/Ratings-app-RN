import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Button from './component'
import Colors from '../../utilities/colors'

const ButtonComponent = () => (
  <View style={styles.container}>
    <Button
      title={'GET STARTED'}
      onPress={() => console.log('pressed')}
      customStyle={styles.getStartedBtn}
    />
    <View style={styles.buttonDock}>
      <Button
        title={'Login'}
        textColor={Colors.black}
        buttonColor={Colors.lightGrey}
        customStyle={styles.leftBtn}
        onPress={() => console.log('pressed')}
      />
      <Button
        title={'Sign Up'}
        textColor={Colors.white}
        customStyle={styles.rightBtn}
        buttonColor={Colors.appOrange}
        onPress={() => console.log('pressed')}
      />
    </View>
  </View>
)

storiesOf('Components', module).add('Button', () => <ButtonComponent />)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  buttonDock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  getStartedBtn: { borderRadius: 19 },
  leftBtn: {
    flex: 1,
    marginRight: 10,
  },
  rightBtn: {
    flex: 1,
  },
})
