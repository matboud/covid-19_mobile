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
import AboutCard from '../components/AboutCard';

class About extends React.Component {
   constructor(props) {
      super(props);

   }

   render() {
      const windowWidth = Dimensions.get('window').width;
      return (
         <View style={styles.container}>
            <ScrollView style={{ width: windowWidth, paddingHorizontal: 20, }}>
               <View style={{paddingVertical: 50}}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                     <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#34495e' }}>About</Text>
                  </View>
                  <View style={{ marginTop: 60 }}>
                     <AboutCard
                        name={'Matboud Med Amine'}
                        firstPar={'Hello 👋, im a coder 👨🏻‍💻, I work as a full-stack JS devloper at SPORTIME company.'}
                        secPar={'i travel a lot 🗺, play guitar 🎸, and i surf 🏄🏻‍♂️ ^^'}
                        contact={'Contact: @matboud'}
                        img={require('../img/me.jpeg')}
                     />
                  </View>
                  <View style={{ marginTop: 50 }}>
                     <AboutCard
                        name={'Tahali Said'}
                        firstPar={'I am a computer science student at TH Cologne, and java, node developer at Trustedshops.'}
                        secPar={'i like drawing, building stuff, planting and seeing life grows'}
                        contact={'Contact: @tahalis'}
                        img={require('../img/said.jpeg')}
                     />
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

export default connect(mapStateToProps, {})(About);