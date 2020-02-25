import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';


console.disableYellowBox = true;

const navigator = createStackNavigator({

  Login: LoginScreen,
  RegisterScreen: RegisterScreen,
},
  (navigationOptions = {
    headerMode: "none"
  })
);
const AppNavigator = createAppContainer(navigator)

const App = () => {


  return (

    <AppNavigator />

  );

}
export default App;
