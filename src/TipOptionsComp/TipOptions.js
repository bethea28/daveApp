import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'

export const TipOptionsComp = ({
  handleTipPress,
  advanceAmount,
  tipOptions,
}) => {
  console.log('hey', tipOptions)
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          borderRadius: 5,
          borderColor: 'black',
          alignItems: 'center',
        }}
      >
        {tipOptions.map((option, index) => {
          return (
            <Pressable
              key={index}
              onPress={(event) => handleTipPress(event, index)}
              style={(pressed) => [
                { backgroundColor: pressed.pressed ? 'orange' : 'yellow' },
                {
                  height: 150,
                  width: 150,
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  padding: 5,
                },
              ]}
            >
              <Text>{option.trees}</Text>
              {index !== 0 && (
                <>
                  <Text>Trees Planted</Text>
                  <Text>{advanceAmount * option.percent * 0.01}$</Text>
                </>
              )}
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  )
}
