import React from 'react';
import {
   View,
   Text,
   Image,
   Dimensions
} from 'react-native';

export default class AboutCard extends React.Component {
   render() {
      const windowWidth = Dimensions.get('window').width;
      return (
         <View style={{
            flexDirection: 'row',
         }}>
            <View style={{
               backgroundColor: 'white',
               width: windowWidth / 2 + 0,
               marginLeft: 0,
               zIndex: 99,
               position: 'absolute',
               alignSelf: 'center',
               paddingHorizontal: 10,
               paddingVertical: 20,
               justifyContent: 'center',
               borderRadius: 10,

               shadowColor: "#000",
               shadowOffset: {
                  width: 0,
                  height: 2,
               },
               shadowOpacity: this.props.disabled ? 0 : 0.23,
               shadowRadius: this.props.disabled ? 0 : 2.62,

               elevation: this.props.disabled ? 0 : 4,
            }}>
               <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#34495e', marginBottom: 10 }}>{this.props.name}</Text>
               <Text style={{ fontSize: 16, color: '#2c3e50' }}>{this.props.firstPar}</Text>
               <Text style={{ fontSize: 16, color: '#2c3e50' }}>{this.props.secPar}</Text>
               <Text style={{ fontSize: 16, color: '#2c3e50', fontWeight: 'bold', paddingTop: 10 }}>{this.props.contact}</Text>
            </View>
            <View style={{ flex: 1, }} />
            <View style={{ backgroundColor: '#000000', flex: 1, height: 280, alignItems: 'flex-end', borderRadius: 10, justifyContent: 'center' }}>
               <Image source={this.props.img} style={{ width: windowWidth / 2, height: 280, borderRadius: 10, }} />
            </View>
         </View>
      );
   }
}
