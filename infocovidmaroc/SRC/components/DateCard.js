import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image
} from 'react-native';

// INFECTED RECOVERED DEATHS
// '#f0932b' : index === 1 ? '#2ed573' : '#eb4d4b',
export default class DateCard extends React.Component {
   render() {
      const props = this.props;
      return (
         <View style={{
            backgroundColor: 'white',
            paddingVertical: 25,
            paddingHorizontal: 25,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center'

         }}>
            <View style={{ flex: 1.4, alignItems: 'flex-start' }}>
               <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2f3542' }}>{props.date}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
               <Text style={{ color: '#f0932b', fontSize: 16 }}>{props.infected}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
               <Text style={{ color: '#2ed573', fontSize: 16 }}>{props.recoveries}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
               <Text style={{ color: '#eb4d4b', fontSize: 16 }}>{props.deaths}</Text>
            </View>
         </View>
      );
   }
}
