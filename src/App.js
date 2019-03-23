import { createStackNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import LogIn from './screens/LogIn'
import Phone from './screens/Phone'

const MainNavigator = createStackNavigator({
  LogIn: { screen: LogIn },
  Phone: {
    screen: Phone,
    navigationOptions: () => ({
     header: null
    }) 
  },
});

const Navigation = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

