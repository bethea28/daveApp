import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export const TipButtonComp = ({
  advanceAmount,
  tipOptions,
  handleTipConfirm,
  selectedOption,
}) => {
  console.log('selected', selectedOption)
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.5 : 1.0 },
        ]}
        onPress={handleTipConfirm}
      >
        <Text>
          Tip <Text>${selectedOption}</Text>
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
