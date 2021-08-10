import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface AnimVal extends Animated.Value {
  _value: number;
}

interface Props {}

export default function index({children}: React.PropsWithChildren<Props>) {
  const [shouldMove, setShouldMove] = useState(false);
  const pan = useRef(
    new Animated.ValueXY({x: 0, y: Dimensions.get('screen').height - 200}),
  ).current;

  const PullUpView = () => (
    <TouchableWithoutFeedback onPress={() => setShouldMove(true)}>
      <View style={styles.pullUp} />
    </TouchableWithoutFeedback>
  );

  const readPanPosition = () => {
    if ((pan.y as AnimVal)._value > 0 && (pan.y as AnimVal)._value < 200)
      updatePanPosition(0);
    else if ((pan.y as AnimVal)._value > 200 && (pan.y as AnimVal)._value < 500)
      updatePanPosition(350);
    else if (
      (pan.y as AnimVal)._value > 500 &&
      (pan.y as AnimVal)._value < Dimensions.get('screen').height
    )
      updatePanPosition(Dimensions.get('screen').height - 200);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (event, gesture) => {
      if (gesture?.moveX > gesture?.moveY) {
        return false;
      }
      return true;
    },
    onPanResponderGrant: () => {
      pan.setOffset({
        x: (pan.x as AnimVal)._value,
        y: (pan.y as AnimVal)._value,
      });
    },
    onPanResponderMove: Animated.event([null, {dy: pan.y}]),
    onPanResponderRelease: () => {
      pan.flattenOffset();
      readPanPosition();
    },
  });
  const updatePanPosition = (yVal: number) => {
    pan.setValue({
      x: (pan.x as AnimVal)._value,
      y: yVal,
    });
    pan.setOffset({
      x: (pan.x as AnimVal)._value,
      y: yVal,
    });
  };

  useEffect(() => {
    pan.y.addListener(e => {
      if (e.value < 0) {
        updatePanPosition(0);
      }
    });
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateY: pan.y}],
      }}
      {...panResponder.panHandlers}>
      <PullUpView />
      <ScrollView>{children}</ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    height: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  pullUp: {
    borderWidth: 2,
    borderColor: 'grey',
    width: 100,
    alignSelf: 'center',
  },
});
