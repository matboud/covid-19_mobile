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

class Propagate extends React.Component {
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
                     <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: '#2c3e50' }}>Les recommandations standard pour prévenir la propagation de l’infection comprennent le lavage régulier des mains, le fait de se couvrir la bouche et le nez lorsque l’on tousse et éternue et une cuisson complète de la viande et des œufs. Il faut éviter les contacts étroits avec toute personne présentant des symptômes de maladie respiratoire tels que la toux et les éternuements.</Text>
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

export default connect(mapStateToProps, {})(Propagate);