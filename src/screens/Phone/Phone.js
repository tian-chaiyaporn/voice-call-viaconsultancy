import React from 'react'
import {
  View,
  Text,
  NativeModules,
  SafeAreaView,
  Button
} from 'react-native'
import { RtcEngine, AgoraView } from 'react-native-agora'
import { connect } from 'react-redux'
import { logout } from '../LogIn/LogInActions'

const { Agora } = NativeModules

function Phone(props) {
  const { navigate } = props.navigation
  console.log('test agora integration', Agora)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Hello Phone</Text>
      </View>
      <Button
        title={'Log Out'}
        onPress={() => {
          props.logout()
          navigate('LogIn')
        }}
      />
    </SafeAreaView>
  )
}

export default connect(null, { logout })(Phone)

