import React from 'react'
import { View, Text, NativeModules, SafeAreaView } from 'react-native'
// import { RtcEngine, AgoraView } from 'react-native-agora';

// const { Agora } = NativeModules

function Phone() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Hello Phone</Text>
      </View>
    </SafeAreaView>
  )
}

export default Phone

