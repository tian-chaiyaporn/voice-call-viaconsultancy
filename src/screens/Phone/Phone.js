import React from 'react'
import {
  View,
  Text,
  NativeModules,
  SafeAreaView,
  Button
} from 'react-native'
import { RtcEngine } from 'react-native-agora'
import { connect } from 'react-redux'
import { logout } from '../LogIn/LogInActions'

const { Agora } = NativeModules

function Phone(props) {
  const { navigate } = props.navigation
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
            <View style={{ flex: 1 }}><Button title={'Call'} onPress={() => { console.log('Call') }} /></View>
            <View style={{ flex: 1 }}><Button title={'End Call'} onPress={() => { console.log('End Call')}} /></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, { logout })(Phone)

