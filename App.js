import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native'
import { fetchTips } from './src/Api'
import { TipOptionsComp } from './src/TipOptionsComp/TipOptions'
import { TipButtonComp } from './src/TipButtonComp/TipButton'
import { SloganComp } from './src/SloganComp/Slogan'

const image = require('./assets/dave.png')
const imageTwo = require('./assets/background.png')
const sloganOne = 'Pay Nothing Now. Collected On Payback!'
const sloganTwo =
  'Your Optional Tips Help Us Stay In Business. We Also Plant A Tree For Every % Tip!'
// const image = { uri: 'https://reactjs.org/logo-og.png' }
console.log('images', image)

export default function App() {
  const [tipOptions, setTipOptions] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState(0)
  const [advanceAmount, setAdvanceAmount] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      const req = await fetchTips()
      setTipOptions([{ percent: 0, trees: 'No Tip' }, ...req.tipOptions])
      setAdvanceAmount(req.advanceAmount)
    }
    fetchData()
  }, [])

  const handleTipPress = (event, index) => {
    console.log('hey tip press', index)
    setSelectedOption(tipOptions[index].percent)
  }
  const handleTipConfirm = () => {
    // alert(`Thank you for your $${advanceAmount * selectedOption * 0.01} tip!`)
  }
  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: 'black' }}
      ></SafeAreaView>
      <SafeAreaView style={styles.container}>
        <ImageBackground style={{ height: 400 }} source={imageTwo}>
          <ImageBackground
            style={{
              position: 'absolute',
              right: 0,
              left: 0,
              top: 260,
              bottom: 0,
              height: 140,
            }}
            source={image}
          >
            <View style={{ position: 'relative', bottom: 150 }}>
              <SloganComp slogan={sloganTwo} />
            </View>
          </ImageBackground>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'flex-end',
          }}
        >
          <TipOptionsComp
            handleTipPress={handleTipPress}
            advanceAmount={advanceAmount}
            tipOptions={tipOptions}
          />
          <SloganComp slogan={sloganOne} />
          <TipButtonComp
            selectedOption={selectedOption}
            handleTipConfirm={handleTipConfirm}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
