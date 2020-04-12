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
import Prevents from './SRC/screens/Prevents';
import Propagate from './SRC/screens/Propagate';
import Symptomes from './SRC/screens/Symptomes';
import About from './SRC/screens/About';

// redux
import configStore from './SRC/store/configStore';
import { Provider } from 'react-redux';

import { putData, getTotal } from './SRC/actions/Data';
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
      // console.log('App.js => componentdidmount');
      fetch(URL_getData, {
         method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
      })
         .then(response => response.json())
         .then(responseJson => {
            if (responseJson ?
               (
                  store.dispatch(putData(responseJson))
               )
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
                  <Stack.Screen name="Prevents" component={Prevents} />
                  <Stack.Screen name="Propagate" component={Propagate} />
                  <Stack.Screen name="Symptomes" component={Symptomes} />
                  <Stack.Screen name="About" component={About} />
               </Stack.Navigator>
            </NavigationContainer>
         </Provider>
      );
   }
}

export default App;
