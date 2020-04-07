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
   Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import CardInfo from '../components/CardInfo';
import LiveCard from '../components/LiveCard';


// {['#314755',  '#26a0da']}
 class Home extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#5214cc', '#1488CC']} style={styles.header}>
               <View style={{ paddingHorizontal: 20, justifyContent: 'center', flex: 1 }}>
                  <Text style={styles.subtitle}>
                     Covid - 19
                  </Text>
                  <Text style={styles.title}>
                     Information
                  </Text>
               </View>

            </LinearGradient>

            <View style={{ flex: 2, paddingHorizontal: 20, marginTop: -40, zIndex: 1 }}>
              
               <LiveCard />
               
               <View style={{ marginTop: 30 }}>
                  <View style={{ marginBottom: 20, }}>
                     <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Statistiques')
                     }}>
                        <CardInfo
                           color={'#9b59b629'}
                           img={require('../img/pie.png')}
                           title={'Statistiques'}
                           subtitle={"Il s'agit de ressources fiables"}
                        />
                     </TouchableOpacity>
                  </View>

                  <View style={{ marginBottom: 20 }}>
                     <CardInfo
                        color={'#28a4ff20'}
                        img={require('../img/soap.png')}
                        title={'Préventif'}
                        subtitle={'Lavez-vous les mains avant de lire ceci'}
                     />
                  </View>

                  <View style={{ marginBottom: 20 }}>
                     <CardInfo
                        color={'#ffb10021'}
                        img={require('../img/virus.png')}
                        title={'Se propager'}
                        subtitle={'Arrêter la propagation est un objectif'}
                     />
                  </View>

                  <View style={{ marginBottom: 20 }}>
                     <CardInfo
                        color={'#ff851221'}
                        img={require('../img/fever.png')}
                        title={'Symptômes'}
                        subtitle={'Et surtout ne paniquez pas'}
                     />
                  </View>
               </View>


            </View>
            <View style={{ flex: 1 }}>
               <Image style={{ width: '100%', opacity: 0.6 }} source={require('../img/back.png')} />
            </View>

         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#ecf0f1"
   },
   header: {
      flex: 1,
      backgroundColor: '#3498db',
      // paddingTop: 60
   },
   subtitle: {
      color: '#bdc3c7',
      fontSize: 23
   },
   title: {
      color: 'white',
      fontSize: 55,
      fontWeight: '500'
   }
})

const mapStateToProps= state => ({});

export default connect(mapStateToProps, {})(Home);