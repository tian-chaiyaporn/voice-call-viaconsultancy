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
const { Host, AudioProfileDefault, AudioScenarioDefault } = Agora

const APP_ID = '506b566c536b433897e311465d0d0b98'
const CHANNEL_NAME = 'ViaConsultancyVoiceCall'
const UID = Date.now() + Math.floor(Math.random())

function Phone(props) {
  const { navigate } = props.navigation

  useEffect(() => {
    const config = {
      appid: APP_ID,
      audioProfile: AudioProfileDefault,
      channelProfile: 1,
      audioScenario: AudioScenarioDefault,
      clientRole: Host
    }

    RtcEngine.on('joinChannelSuccess', async (data) => {
      console.log('join channel success')
      try {
        console.log(RtcEngine.enableLocalAudio)
        const enableAudio = await Agora.enableLocalAudio(true)
        console.log('enable local audio success', enableAudio)
        Alert.alert('You have joined this conversation successfully')
      } catch(e) {
        console.log('fails', e)
      }
    })

    RtcEngine.on('userJoined', (data) => {
      console.log('user has joinged channel')
      Alert.alert('Someone has joined this conversation')
    })

    RtcEngine.on('userOffline', (data) => {
      console.log('[RtcEngine] onUserOffline', data);
    })

    RtcEngine.init(config)
    RtcEngine.enableAudio()
    return () => {
      RtcEngine.disableAudio()
      RtcEngine.removeAllListeners()
      RtcEngine.destroy()
    }
  }, [])

  const joinChannel = () => {
    console.log('join channel', RtcEngine)
    console.log('channel name', CHANNEL_NAME)
    console.log('UID', UID)
    return RtcEngine.joinChannel(CHANNEL_NAME, UID, '', '')
  }

  const leaveChannel = () => {
    console.log('leave channel', RtcEngine)
    return RtcEngine.leaveChannel()
      .then(data => RtcEngine.enableLocalAudio(false))
      .then(() => Alert.alert('You have left this conversation successfully'))
      .catch(error => console.log('error', error, RtcEngine))
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

