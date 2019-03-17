import { createStackNavigator, createAppContainer } from 'react-navigation'
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

const App = createAppContainer(MainNavigator);

export default App
