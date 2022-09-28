import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export const SloganComp = ({ slogan }) => {
  return (
    <View style={styles.container}>
      <Text>{slogan}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
})
