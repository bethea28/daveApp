import React from 'react'
import { View, Button } from 'react-native'
import { WebView } from 'react-native-webview'

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const color = getRandomColor()
const jsCode = `document.querySelector('body').style.backgroundColor = 'purple'`
const App = () => {
  const webRef = React.useRef('')
  // React.useEffect(() => {
  //   // console.log('data', webRef.forceUpdate())
  //   // interval()
  // })
  const scripts = () => {
    const test = 'bryan was here'
    webRef.current.postMessage('bryan was here')
    console.log('scripts called', webRef.current)
    // return
    return `
    document.querySelector("h1").style.color = 'hotpink';

    webRef.current.postMessage('bryan was here');
    true;
    `
  }
  const onPressWorks = () => {
    scripts()
    // webRef.current.injectJavaScript(`'bryan was here'`)
    webRef.current.injectJavaScript(
      `document.querySelector('body').style.backgroundColor = 'orange'`
    )
    console.log('injected works')
  }
  const interval = () => {
    console.log('reffy', webRef)
    setInterval(() => {
      webRef.current.injectJavaScript(scripts())
    }, 2500)
  }
  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webRef}
        javaScriptEnabled={true}
        source={{ uri: 'https://www.educative.io' }}
        onMessage={(event) =>
          console.log('what the fuck', event.target, event.nativeEvent)
        }
        injectedJavaScript={jsCode}
      />
      <Button onPress={onPressWorks} title={'Works'} />
    </View>
  )
}

export default App




import React from 'react'
import { View, Button } from 'react-native'
import { WebView } from 'react-native-webview'

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.webref = React.createRef()
  }

  onPressWorks = (event) => {
    console.log('test', this.webref)
    this.webref.current.postMessage(`'bryan'`)
    // this.webref.current.injectJavaScript(
    //   `document.querySelector('body').style.backgroundColor = '${getRandomColor()}'`
    // )
  }
  render() {
    // setInterval(() => {
    //   // this.webref.current.injectJavaScript(scripts())
    //   scripts()
    // }, 3500)
    const scripts = () => {
      console.log('this web', this.webref, getRandomColor())
      // return  `document.querySelector('body').style.backgroundColor = 'orange'`
      this.webref.current.injectJavaScript(
        `document.querySelector('body').style.backgroundColor = '${getRandomColor()}'`
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={this.webref}
          source={{ uri: 'https://www.educative.io' }}
          onMessage={(event) => console.log('what the fuck', event.nativeEvent)}
        />
        <Button onPress={this.onPressWorks} title={'Works'} />
      </View>
    )
  }
}

export default App
      // window.ReactNativeWebView.postMessage(document.body.style.backgroundColor);



      import React, { useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  function onMessage(data) {
    console.log('data was here', data.nativeEvent)
    // alert(data.nativeEvent.data)
  }

  function sendDataToWebView() {
    console.log('webview send,')
    webviewRef.current.postMessage('Data from React Native App')
  }

  const webviewRef = useRef()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => sendDataToWebView()}
          style={{
            padding: 20,
            width: 300,
            marginTop: 100,
            backgroundColor: '#6751ff',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>
            Send Data To WebView / Website
          </Text>
        </TouchableOpacity>
      </View>
      <WebView
        ref={webviewRef}
        scalesPageToFit={false}
        mixedContentMode='compatibility'
        onMessage={onMessage}
        source={{
          html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            "
          >
            <button
            onclick="sendDataToReactNativeApp()"
              style="
                padding: 20;
                width: 200;
                font-size: 20;
                color: white;
                background-color: #6751ff;
              "
            >
              Send Data To React Native App
            </button>
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
              window.addEventListener("message", message => {
                console.log(message.data) 
              });
            </script>
          </body>
        </html>        
`,
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
