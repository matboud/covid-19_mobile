import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   Dimensions

} from 'react-native';

import { PieChart } from 'react-native-svg-charts'


// INFECTED RECOVERED DEATHS

export default class LiveCard extends React.Component {
   render() {
      // each value represents a goal ring in Progress chart

      const data = [1120, 89, 80]

      const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
      return (
         <View style={{
            backgroundColor: 'white',
            paddingVertical: 13,
            paddingHorizontal: 15,
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
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c3e50' }}>Mise à jour des cas</Text>
            <Text style={{ color: '#6d6d6d' }}>A vous de diminuer le nombre, <Text style={{ color: '#2b2b2b' }}>restez à la maison.</Text></Text>

            <View style={{ paddingTop: 20, flexDirection: 'row' }}>
               <View style={{ flex: 1 }}>
                  {
                     <PieChart style={{ height: 100 }}
                        data={
                           data
                              .filter((value) => value > 0)
                              .map((value, index) => ({
                                 value,
                                 svg: {
                                    fill: index === 0 ? '#f0932b' : index === 1 ? '#2ed573' : '#eb4d4b',
                                    onPress: () => console.log('press', index),
                                 },
                                 key: `pie-${index}`,
                              }))
                        }
                     />
                  }
               </View>
               <View style={{ flex: 1.4, justifyContent: 'space-around', paddingLeft: 10 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 17, color: '#f0932b' }}>Confirmés: </Text>
                     </View>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#f0932b' }}>1021</Text>
                     </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 17, color: '#2ed573' }}>Rétablie: </Text></View>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2ed573' }}>76</Text></View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 17, color: '#eb4d4b' }}>Décès: </Text></View>
                     <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#eb4d4b' }}>76</Text></View>
                  </View>

               </View>


               {
                  // <View>
                  //    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  //       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ffa50e' }}>1021</Text>
                  //       <Text style={{ color: '#ffa50e', fontSize: 16 }}>Confirmés</Text>
                  //    </View>

                  //    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  //       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4db8ec' }}>76</Text>
                  //       <Text style={{ color: '#4db8ec', fontSize: 16 }}>Rétablie</Text>
                  //    </View>

                  //    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  //       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#e86d43' }}>70</Text>
                  //       <Text style={{ color: '#e86d43', fontSize: 16 }}>Décès</Text>
                  //    </View>
                  // </View>
               }
            </View>
         </View>
      );
   }
}
