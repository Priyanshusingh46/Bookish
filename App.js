import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions,View } from 'react-native';
import Home from './Components/Home'
import Class_6 from'./Components/Class_6.js'
import Class_7 from'./Components/Class_7.js'
import Class_8 from'./Components/Class_8.js'
import Class_9 from'./Components/Class_9.js'
import Class_10 from'./Components/Class_10.js'
import Class_11 from'./Components/Class_11.js'
import Class_12 from'./Components/Class_12.js'
import Stories from'./Components/Stories'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Class_6" component={Class_6}/>
      <Stack.Screen name="Class_7" component={Class_7}/>
      <Stack.Screen name="Class_8" component={Class_8}/>
      <Stack.Screen name="Class_9" component={Class_9}/>
      <Stack.Screen name="Class_10" component={Class_10}/>
      <Stack.Screen name="Class_11" component={Class_11}/>
      <Stack.Screen name="Class_12" component={Class_12}/>
      <Stack.Screen name="Stories" component={Stories}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;