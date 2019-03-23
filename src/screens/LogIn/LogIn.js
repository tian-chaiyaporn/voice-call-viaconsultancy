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
    <View>
      <Button
        title={'Log In'}
        onPress={() => props.logIn('email', 'password')}
      />
      { props.logInIsRequesting ? <Text>please wait</Text> : null }
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

