import React, { useEffect } from 'react'
import {
  View,
  Text,
  NativeModules,
  SafeAreaView,
  Button,
  Alert
} from 'react-native'
import { RtcEngine } from 'react-native-agora'
import { connect } from 'react-redux'
import { logout } from '../LogIn/LogInActions'

const { Agora } = NativeModules
const { AudioProfileDefault } = Agora
const CHANNEL_NAME = 'ViaConsultancyVoiceCall'
const UID = Date.now() + Math.floor(Math.random())

function Phone(props) {
  const { navigate } = props.navigation

  useEffect(() => {
    const config = { appid: '', audioProfile: AudioProfileDefault }
    RtcEngine.on('joinChannelSuccess', (data) => {
      Alert.alert('You have joined this conversation successfully')
    })

    RtcEngine.on('userJoined', (data) => {
      Alert.alert('Someone has joined this conversation')
    })

    RtcEngine.init(config)

    return () => {
      RtcEngine.removeAllListeners()
      RtcEngine.destroy()
    }
  }, [])

  const joinChannel = () => {
    RtcEngine.joinChannel(CHANNEL_NAME, UID)
  }

  const leaveChannel = () => {
    RtcEngine.leaveChannel()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'flex-end', padding: 20 }}>
          <Button
            title={'Log Out'}
            onPress={() => {
              props.logout()
              navigate('LogIn')
            }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}><Button title={'Call'} onPress={() => joinChannel()} /></View>
            <View style={{ flex: 1 }}><Button title={'End Call'} onPress={() => leaveChannel()} /></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, { logout })(Phone)

