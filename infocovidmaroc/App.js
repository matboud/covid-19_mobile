import 'react-native-gesture-handler';
import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './SRC/screens/Home';
import Details from './SRC/screens/Details';


const Stack = createStackNavigator();

class App extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
               headerShown: false
             }}>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
         </NavigationContainer>
      );
   }
}

export default App;
