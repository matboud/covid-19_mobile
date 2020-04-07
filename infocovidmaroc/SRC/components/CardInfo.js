import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image
} from 'react-native';


export default class CardInfo extends React.Component {
   render() {
      return (
         <View style={{
            backgroundColor: 'white',
            paddingVertical: 13,
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
         }}>
            <View style={{
               backgroundColor: this.props.color,
               width: 50,
               height: 50,
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius: 5
            }}>
               <Image source={this.props.img} style={{ width: 35, height: 35 }} />
            </View>

            <View style={{ marginLeft: 20, justifyContent: 'center', flex: 3, }}>
               <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 5, color: '#2c3e50' }}>{this.props.title}</Text>
               <Text style={{ fontSize: 13, color: '#34495e' }}>{this.props.subtitle}</Text>
            </View>

            <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center' }}>
               <Image source={require('../img/next.png')} style={{ width: 14, height: 34 }} />
            </View>
         </View>
      );
   }
}
