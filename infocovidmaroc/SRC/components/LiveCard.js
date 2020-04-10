import React from 'react';
import {
   View,
   Text,
   ActivityIndicator

} from 'react-native';

import { PieChart } from 'react-native-svg-charts'


export default class LiveCard extends React.Component {


   render() {
      // each value represents a goal ring in Progress chart

      const data = [
         this.props.infections,
         this.props.recoveries,
         this.props.deaths,
      ]
      return (
         <View style={{
            backgroundColor: 'white',
            paddingVertical: 13,
            paddingHorizontal: 15,
            borderRadius: 10,
            height: this.props.heightCard,
            overflow: 'hidden',
            justifyContent: 'space-around',

            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
         }}>



            <View>
               <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c3e50' }}>Mise à jour des cas</Text>
               <Text style={{ color: '#6d6d6d' }}>A vous de diminuer le nombre, <Text style={{ color: '#2b2b2b' }}>restez à la maison.</Text></Text>
            </View>
            <View>
               {
                  this.props.infections === 0 ?
                     <View style={{flexDirection: 'row', paddingTop: 30}}>
                     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#3498db" />
                     </View>
                     
                        
                     </View>


                     :
                     <View style={{  flexDirection: 'row' }}>
                        <View style={{ flex: 0.7 }}>
                           {
                              <PieChart style={{ height: 90 }}
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
                                 <Text style={{ fontSize: 17, color: '#f0932b', fontWeight: 'bold' }}>Confirmés: </Text>
                              </View>
                              <View style={{ flex: 1 }}>
                                 <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#f0932b' }}>{this.props.infections}</Text>
                              </View>
                           </View>
                           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1 }}>
                                 <Text style={{ fontSize: 17, color: '#2ed573', fontWeight: 'bold' }}>Rétablie: </Text></View>
                              <View style={{ flex: 1 }}>
                                 <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2ed573' }}>{this.props.recoveries}</Text></View>
                           </View>
                           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1 }}>
                                 <Text style={{ fontSize: 17, color: '#eb4d4b', fontWeight: 'bold' }}>Décès: </Text></View>
                              <View style={{ flex: 1 }}>
                                 <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#eb4d4b' }}>{this.props.deaths}</Text></View>
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
               }
            </View>

         </View>
      );
   }
}
