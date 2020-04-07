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

import { putData } from './SRC/actions/Data';
import { URL_getData } from './SRC/config/Config';

const store = configStore();

// store.dispatch(getData())

const Stack = createStackNavigator();

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   componentDidMount() {
      console.log('hello');
      fetch(URL_getData, {
         method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
      })
         .then(response => response.json())
         .then(responseJson => {
            console.log('LOOOOG', responseJson)
            if (responseJson ?
               store.dispatch(putData(responseJson))
               :
               (
                  console.log('no data for you tofay')
                  
               )
            );
         })
         .catch(error => {
            this.showToast('An error occured, please try again later', 'danger')
         })
   }

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
