import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SheetComponent from './components/Sheet';

const Render = () => (
  <>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
    <View style={styles.rowStyle}>
      <Text>Data</Text>
    </View>
  </>
);

const Home = () => {
  return (
    <SheetComponent>
      <Render />
    </SheetComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowStyle: {
    height: 60,
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
