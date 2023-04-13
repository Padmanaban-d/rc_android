import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUp from './src/component/user/signup/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/component/user/signin/LoginScreen';
const HelloWorld = () => {
  const Stack = createStackNavigator();
  return (
  
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="/" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'white'
  },
  // text: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: 'black',
  // },
});
export default HelloWorld;