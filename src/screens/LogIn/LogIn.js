import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logIn } from './LogInActions'

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

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

export default connect(mapStateToProps, { logIn })(LogIn)

