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

class Symptomes extends React.Component {
   constructor(props) {
      super(props);

   }

   render() {
      const windowWidth = Dimensions.get('window').width;
      return (
         <View style={styles.container}>
            <ScrollView style={{ width: windowWidth, paddingHorizontal: 20 }}>
               <View style={{ height: 300, justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={require('../img/virus.png')} style={{ width: 120, height: 120 }} />
               </View>
               <View style={{ width: '100%', paddingBottom: 60 }}>
                  <View style={{ backgroundColor: '#f1c40f5c', paddingHorizontal: 20, paddingVertical: 12, marginBottom: 15, }}>
                     <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#34495e' }}>Il n'existe actuellement aucun vaccin contre la maladie à coronavirus 2019 (COVID-19).</Text>
                  </View>
                  <View style={{ paddingHorizontal: 20, paddingVertical: 12, }}>
                     <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: '#2c3e50' }}>La maladie à coronavirus 2019 (COVID-19) se caractérise par des symptômes bénins parmi lesquels un mal de gorge, de la toux, et de la fièvre. L'atteinte peut être plus sévère chez certaines personnes et peut entraîner une pneumonie ou des difficultés respiratoires.
                     Plus rarement, la maladie peut être mortelle. Les personnes âgées, et les personnes qui présentent d'autres problèmes médicaux (p. ex. asthme, diabète, ou maladie cardiaque), peuvent être plus vulnérables et tomber gravement malades.</Text>
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

export default connect(mapStateToProps, {})(Symptomes);