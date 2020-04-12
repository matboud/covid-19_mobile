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
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import CardInfo from '../components/CardInfo';
import LiveCard from '../components/LiveCard';

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 120;
const LIVE_CARD_HEIGHT = 210;

const LIVE_CARD_TOP = 110;
const LIVE_CARD_TOP_MIN = 0;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         total: {

         },
         scrollY: new Animated.Value(0)
      }
   }

   render() {
      const total = this.props.total;

      const headerHeight = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
         extrapolate: 'clamp'
      })

      const liveCardHeight = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [LIVE_CARD_TOP_MIN, LIVE_CARD_TOP],
         extrapolate: 'clamp'
      })

      const headerZIndex = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [0, 0, 1],
         extrapolate: 'clamp'
      })

      const opacityTitle = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [1, 0],
         extrapolate: 'clamp'
      })

      const headerTitleBottom = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [-50, 0, 0],
         extrapolate: 'clamp'
      })



      return (
         <View style={styles.container}>
            <Animated.View style={[
               styles.header,
               {
                  width: windowWidth,
                  height: headerHeight,
                  position: 'absolute',
                  zIndex: headerZIndex
               }
            ]}>
               <LinearGradient
                  start={{
                     x: 0,
                     y: 0
                  }}
                  colors={[
                     '#5214cc',
                     '#1488CC'
                  ]}
                  style={{ flex: 1, alignItems: 'center' }}
               >
                  <Animated.View style={{ opacity: opacityTitle, width: '100%', height: HEADER_MIN_HEIGHT, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20 }}>
                     <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#ecf0f1' }}>Covid-19</Text>
                  </Animated.View>

                  <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom, flexDirection: 'row', }}>
                     <View style={{ flexDirection: 'row', width: '100%', height: HEADER_MIN_HEIGHT, alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>{total ? total.infections : '...'}</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Confirmés</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>{total ? total.recoveries : '...'}</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Rétablie</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>{total ? total.deaths : '...'}</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Décès</Text>
                        </View>
                     </View>
                  </Animated.View>
               </LinearGradient>
            </Animated.View>

            <ScrollView
               scrollEventThrottle={16}
               onScroll={
                  Animated.event(
                     [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                  )
               }
               showsVerticalScrollIndicator={false}
               style={{
                  flex: 1,
               }}
            >

               <Animated.View style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  marginTop: HEADER_MAX_HEIGHT - LIVE_CARD_HEIGHT / 2,

               }}>
                  {
                     <Animated.View style={{
                        paddingTop: liveCardHeight
                     }}>
                        <LiveCard
                           infections={total ? total.infections : 0}
                           recoveries={total ? total.recoveries : 0}
                           deaths={total ? total.deaths : 0}
                           heightCard={LIVE_CARD_HEIGHT}
                        />
                     </Animated.View>
                  }
               </Animated.View>
               {
                  <View style={{ marginTop: 30, paddingHorizontal: 20 }}>

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
                        <TouchableOpacity onPress={() => {
                           this.props.navigation.navigate('Prevents')
                        }}>
                           <CardInfo
                              color={'#28a4ff20'}
                              img={require('../img/soap.png')}
                              title={'Préventif'}
                              subtitle={'Lavez-vous les mains avant de lire ceci'}
                           />
                        </TouchableOpacity>
                     </View>

                     <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => {
                           this.props.navigation.navigate('Propagate')
                        }}>
                           <CardInfo
                              color={'#ffb10021'}
                              img={require('../img/virus.png')}
                              title={'Se propager'}
                              subtitle={'Arrêter la propagation est un objectif'}
                           />
                        </TouchableOpacity>
                     </View>

                     <View style={{ marginBottom: 16 }}>
                        <TouchableOpacity onPress={() => {
                           this.props.navigation.navigate('Symptomes')
                        }}>
                           <CardInfo
                              color={'#ff851221'}
                              img={require('../img/fever.png')}
                              title={'Symptômes'}
                              subtitle={'Et surtout ne paniquez pas'}
                           />
                        </TouchableOpacity>
                     </View>

                     <View style={{width: '40%', height: 1, backgroundColor: '#bdc3c7', marginBottom: 5, alignSelf: 'center' }} />
                     <View style={{width: '10%', height: 1, backgroundColor: '#bdc3c7', marginBottom: 16, alignSelf: 'center' }} />
 
                     <View style={{ marginBottom: 20, opacity: 0.3 }}>
                        <TouchableOpacity disabled onPress={() => {
                           this.props.navigation.navigate('')
                        }}>
                           <CardInfo
                              color={'#7e8c8d2e'}
                              img={require('../img/dashboard.png')}
                              title={'Notre source de données'}
                              subtitle={'Et surtout ne paniquez pas'}
                              disabled
                           />
                        </TouchableOpacity>
                     </View>

                     <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => {
                           this.props.navigation.navigate('About')
                        }}>
                           <CardInfo
                              color={'#2fcc7015'}
                              img={require('../img/group.png')}
                              title={'Qui somme nous'}
                              subtitle={'Et surtout ne paniquez pas'}
                           />
                        </TouchableOpacity>
                     </View>
                  </View>
               }
               <View style={{ height: 30 }}>

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
      backgroundColor: "#ecf0f1"
   },

   header: {
      // flex: 1,
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

const mapStateToProps = (state) => ({
   data: state.data,
   total: state.total
});

export default connect(mapStateToProps, {})(Home);