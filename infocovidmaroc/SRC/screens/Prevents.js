import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Image,
   TouchableOpacity,
   Dimensions,
   Animated
} from 'react-native';
import { connect } from 'react-redux';

class Prevents extends React.Component {
   constructor(props) {
      super(props);

   }

   render() {
      const windowWidth = Dimensions.get('window').width;
      return (
         <View style={styles.container}>
            <ScrollView style={{ width: windowWidth, paddingHorizontal: 20 }}>
               <View style={{ height: 300, justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={require('../img/soap.png')} style={{ width: 120, height: 120 }} />
               </View>
               <View style={{ width: '100%', paddingBottom: 60  }}>
                  <View style={{ backgroundColor: '#f1c40f5c', paddingHorizontal: 20, paddingVertical: 12, marginBottom: 15, }}>
                     <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#34495e' }}>Il n'existe actuellement aucun vaccin contre la maladie à coronavirus 2019 (COVID-19).</Text>
                  </View>

                  <View style={{ paddingHorizontal: 20, paddingVertical: 12, }}>
                     <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: '#2c3e50' }}>Vous pouvez réduire le risque de contracter l'infection si:</Text>
                     <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 13 }}>
                        <View style={{ width: 14, height: 14, backgroundColor: '#34495e', marginTop: 5, borderRadius: 7 }} />
                        <Text style={{ textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: '#2c3e50', marginLeft: 10, }}>Vous vous nettoyez fréquemment les mains avec un produit hydroalcoolique ou à l'eau et au savon.</Text>
                     </View>
                     <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 13 }}>
                        <View style={{ width: 14, height: 14, backgroundColor: '#34495e', marginTop: 5, borderRadius: 7 }} />
                        <Text style={{ textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: '#2c3e50', marginLeft: 10, }}>Vous vous couvrez le nez et la bouche avec un mouchoir ou le creux du coude quand vous toussez ou éternuez.</Text>
                     </View>
                     <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 13 }}>
                        <View style={{ width: 14, height: 14, backgroundColor: '#34495e', marginTop: 5, borderRadius: 7 }} />
                        <Text style={{ textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: '#2c3e50', marginLeft: 10, }}>vous évitez les contacts étroits (à moins de 1 mètre ou 3 pieds) avec toute personne ayant des symptômes de rhume banal ou d'état grippal.</Text>
                     </View>
                  </View>

               </View>

            </ScrollView>

         </View>
      );
   }
}

const styles = StyleSheet.create({
   // FULL PAGE
   container: {
      flex: 1,
      backgroundColor: "#ecf0f1",
      justifyContent: 'center',
      alignItems: 'center',
   },

})

const mapStateToProps = (state) => ({
   data: state.data,
   total: state.total
});

export default connect(mapStateToProps, {})(Prevents);