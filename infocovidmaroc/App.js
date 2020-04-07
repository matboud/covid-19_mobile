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
import Statistiques from './SRC/screens/Statistiques';

// redux
import configStore from './SRC/store/configStore';
import { Provider } from 'react-redux';

import { getData } from './SRC/actions/Data';

const store = configStore();

// store.dispatch(getData())

const Stack = createStackNavigator();

class App extends React.Component {
   render() {
      return (
         <Provider store={store}>
            <NavigationContainer>
               <Stack.Navigator screenOptions={{
                  headerShown: false
               }}>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Statistiques" component={Statistiques} />
               </Stack.Navigator>
            </NavigationContainer>
         </Provider>
      );
   }
}

export default App;
