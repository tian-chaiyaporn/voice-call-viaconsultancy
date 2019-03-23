import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logIn } from './LogInActions'

function LogIn(props) {
  const { navigate } = props.navigation

  useEffect(() => {
    if (props.isLoggedIn === true) {
      navigate('Phone')
    }
  }, [props.isLoggedIn])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#aaaaFF' }}>
      <Button
        title={'Log In'}
        color={'white'}
        onPress={() => props.logIn('email', 'password')}
        disabled={props.logInIsRequesting}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    logInIsRequesting: state.logInIsRequesting,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { logIn })(LogIn)

