import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { home, login, info1, info2, info3, minhaconta, sobre, curso, emprego, novidade, curriculo, consultoria} from './assets/ela';

<View>  </View>

export default function App() {

  const Stack = createStackNavigator();


  return (
  <NavigationContainer>
    <StatusBar backgroundColor="#ffa7ec" barStyle="light-content"/>
    <Stack.Navigator>
      <Stack.Screen 
        name = "Login" 
        component = {login}
        options={{
        headerShown: false,
        }}
      />
      <Stack.Screen
       name = "Home" 
       component = {home}
       options = {{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "Info1"
       component = {info1}
       options ={{
         headerShown: false,
       }}
       />
        <Stack.Screen
       name = "Info2"
       component = {info2}
       options ={{
         headerShown: false,
       }}
       />
        <Stack.Screen
       name = "Info3"
       component = {info3}
       options ={{
         headerShown: false,
       }}
       />
        <Stack.Screen
       name = "Minhaconta"
       component = {minhaconta}
       options ={{
         headerShown: false,
       }}
       />
        <Stack.Screen
       name = "Sobre"
       component = {sobre}
       options ={{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "Curso"
       component = {curso}
       options ={{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "Emprego"
       component = {emprego}
       options ={{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "Novidade"
       component = {novidade}
       options ={{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "Curriculo"
       component = {curriculo}
       options ={{
         headerShown: false,
       }}
       />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

