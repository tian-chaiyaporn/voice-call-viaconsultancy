import React from 'react'
import { View, Text, Button } from 'react-native'

function LogIn(props) {
  const { navigate } = props.navigation
  return (
    <View>
      <Button
        title={'Log In'}
        onPress={() => navigate('Phone')}
      />
    </View>
  )
}

export default LogIn

