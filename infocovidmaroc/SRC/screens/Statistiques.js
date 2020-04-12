
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
   Animated,
   ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import DateCard from '../components/DateCard';

import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart
} from "react-native-chart-kit";

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 120;
const LIVE_CARD_HEIGHT = 210;

const LIVE_CARD_TOP = 110;
const LIVE_CARD_TOP_MIN = 0;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Statistiques extends React.Component {
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
                     <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#ecf0f1' }}>Maroc</Text>
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



                        {
                           <View style={{ width: '100%' }}>
                              {this.props.infectionsArray ?
                                 <View style={{
                                    backgroundColor: "#3498db",
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    borderColor: 'white',
                                    borderWidth: 5,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                       width: 0,
                                       height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                                    elevation: 4,
                                    overflow: 'hidden'
                                 }}>
                                    <LineChart
                                       data={{
                                          labels: this.props.dates ? this.props.dates : [0, 0, 0, 0],
                                          datasets: [
                                             {
                                                data: this.props.infectionsArray ? this.props.infectionsArray : [0, 0, 0, 0]
                                             }
                                          ]
                                       }}
                                       width={Dimensions.get("window").width - 10} // from react-native
                                       height={180}
                                       yAxisLabel=""
                                       yAxisSuffix=""
                                       yAxisInterval={10} // optional, defaults to 1
                                       chartConfig={{
                                          backgroundColor: "#34495e",
                                          backgroundGradientFrom: "#3498db",
                                          backgroundGradientTo: "#ffa726",

                                          decimalPlaces: 0.1, // optional, defaults to 2dp
                                          color: (opacity = 1) => `#f0932b`,
                                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                          style: {
                                             borderRadius: 10,
                                          },
                                          propsForDots: {
                                             r: "0",
                                             strokeWidth: "0",
                                             stroke: "green"
                                          }
                                       }}
                                       bezier
                                       style={{
                                          marginLeft: -35
                                       }}
                                    />
                                    {
                                       // ------------------------------------------------------------------------ RED

                                       <LineChart
                                          data={{
                                             labels: this.props.deaths ? this.props.deaths : [0, 0, 0, 0],
                                             datasets: [
                                                {
                                                   data: this.props.deaths ? this.props.deaths : [0, 0, 0, 0]
                                                }
                                             ]
                                          }}
                                          width={Dimensions.get("window").width} // from react-native
                                          height={180}
                                          yAxisLabel=""
                                          yAxisSuffix=""
                                          yAxisInterval={10} // optional, defaults to 1
                                          chartConfig={{
                                             backgroundColor: "",
                                             backgroundGradientFromOpacity: "",
                                             backgroundGradientTo: "",

                                             decimalPlaces: 0.1, // optional, defaults to 2dp
                                             color: (opacity = 1) => `#e74c3c`,
                                             labelColor: (opacity = 0) => `#e74c3c00`,
                                             style: {
                                                borderRadius: 10,

                                             },
                                             propsForDots: {
                                                r: 0,
                                                strokeWidth: 0,
                                                stroke: "red"
                                             }
                                          }}
                                          bezier
                                          style={{
                                             borderRadius: 16,
                                             marginLeft: -35,
                                             marginTop: -180
                                          }}
                                       />
                                    }
                                    {
                                       // ------------------------------------------------------------------------ GREEN


                                       <LineChart
                                          data={{
                                             labels: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0],
                                             datasets: [
                                                {
                                                   data: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0]
                                                }
                                             ]
                                          }}
                                          width={Dimensions.get("window").width} // from react-native
                                          height={180}
                                          yAxisLabel=""
                                          yAxisSuffix=""
                                          yAxisInterval={10} // optional, defaults to 1
                                          chartConfig={{
                                             backgroundColor: "",
                                             backgroundGradientFromOpacity: "",
                                             backgroundGradientTo: "",
                                             decimalPlaces: 0.1, // optional, defaults to 2dp
                                             color: (opacity = 0) => `#2ecc71`,
                                             labelColor: (opacity = 0) => `#ffffff00`,
                                             style: {
                                                borderRadius: 10,

                                             },
                                             propsForDots: {
                                                r: 0,
                                                strokeWidth: 0,
                                                stroke: "#2ecc71"
                                             }
                                          }}
                                          bezier
                                          style={{
                                             borderRadius: 16,
                                             marginLeft: -35,
                                             marginTop: -180
                                          }}
                                       />

                                    }
                                 </View>
                                 : <ActivityIndicator size="large" color="white" />}
                           </View>
                        }





                     </Animated.View>
                  }
               </Animated.View>
               {
                  <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                     {
                        this.props.grouped ?

                           this.props.grouped.slice(0).reverse().map((item) => {
                              return (
                                 <View style={{ marginBottom: 12 }}>
                                    <DateCard
                                       date={item.release_date}
                                       infected={item.infections}
                                       recoveries={item.recoveries}
                                       deaths={item.deaths}
                                    />
                                 </View>
                              )

                           })

                           :
                           <ActivityIndicator size="large" color="#3498db" />
                     }

                  </View>
               }
               <View style={{ height: 30 }}/>

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
   total: state.total,
   data: state.data,
   infectionsArray: state.infectionsArray,
   deaths: state.deaths,
   recoveries: state.recoveries,
   dates: state.dates,
   grouped: state.grouped
});

export default connect(mapStateToProps, {})(Statistiques);








// import React from 'react';
// import {
//    StyleSheet,
//    ScrollView,
//    View,
//    Text,
//    TextInput,
//    Platform,
//    Image,
//    Dimensions,
//    ActivityIndicator
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import LiveCard from '../components/LiveCard';
// import { connect } from 'react-redux';




// class Statistiques extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          searchText: '',
//          isData: false
//       }
//    }

//    componentDidMount() {
//    }


//    render() {

//       return (
//          <View style={styles.container}>
//             <LinearGradient start={{ x: 0, y: 0 }} colors={['#5214cc', '#1488CC']} style={styles.header}>
//                <View style={{ paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 50 : 15, flex: 1 }}>
//                   <Text style={styles.subtitle}>
//                      covidmaroc.ma
//                   </Text>
//                   <Text style={styles.title}>
//                      Covid - 19
//                   </Text>
//                </View>

//                <View style={{ flex: 1.3, paddingHorizontal: 20, paddingBottom: 15, paddingTop: 20 }}>
//                   <View style={{
//                      borderColor: 'white',
//                      borderWidth: 1.5,
//                      borderRadius: 10,
//                      paddingHorizontal: 10,
//                      flexDirection: 'row'
//                   }}>
//                      <View
//                         style={styles.searchBar}
//                      >
//                         <Text style={{color: 'white', fontSize: 20}}>Maroc</Text>
//                      </View>
//                      <View style={{ flex: 0.2, alignItems: 'flex-end', justifyContent: 'center' }}>
//                         <Image source={require('../img/search.png')} style={{ width: 25, height: 25 }} />
//                      </View>
//                   </View>

//                </View>
//             </LinearGradient>

//             <View style={{ flex: 2, paddingHorizontal: 20, marginTop: -50}}>
//                <View style={{
//                   backgroundColor: "#3498db",
//                   paddingHorizontal: 10,
//                   paddingVertical: 10,
//                   borderRadius: 10,
//                   borderColor: 'white',
//                   borderWidth: 5,
//                   shadowColor: "#000",
//                   shadowOffset: {
//                      width: 0,
//                      height: 2,
//                   },
//                   shadowOpacity: 0.23,
//                   shadowRadius: 2.62,
//                   elevation: 4,
//                   overflow: 'hidden'
//                }}>
//                   {
//                      this.props.infectionsArray ?
//                         <View>
//                            <LineChart
//                               data={{
//                                  labels: this.props.dates ? this.props.dates : [0, 0, 0, 0],
//                                  datasets: [
//                                     {
//                                        data: this.props.infectionsArray ? this.props.infectionsArray : [0, 0, 0, 0]
//                                     }
//                                  ]
//                               }}
//                               width={Dimensions.get("window").width - 15} // from react-native
//                               height={180}
//                               yAxisLabel=""
//                               yAxisSuffix=""
//                               yAxisInterval={10} // optional, defaults to 1
//                               chartConfig={{
//                                  backgroundColor: "#34495e",
//                                  backgroundGradientFrom: "#3498db",
//                                  backgroundGradientTo: "#ffa726",

//                                  decimalPlaces: 0.1, // optional, defaults to 2dp
//                                  color: (opacity = 1) => `#f0932b`,
//                                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                                  style: {
//                                     borderRadius: 10,
//                                  },
//                                  propsForDots: {
//                                     r: "0",
//                                     strokeWidth: "0",
//                                     stroke: "green"
//                                  }
//                               }}
//                               bezier
//                               style={{
//                                  marginLeft: -35
//                               }}
//                            />
//                            {
//                               // ------------------------------------------------------------------------ RED

//                               <LineChart
//                                  data={{
//                                     labels: this.props.deaths ? this.props.deaths : [0, 0, 0, 0],
//                                     datasets: [
//                                        {
//                                           data: this.props.deaths ? this.props.deaths : [0, 0, 0, 0]
//                                        }
//                                     ]
//                                  }}
//                                  width={Dimensions.get("window").width - 10} // from react-native
//                                  height={180}
//                                  yAxisLabel=""
//                                  yAxisSuffix=""
//                                  yAxisInterval={10} // optional, defaults to 1
//                                  chartConfig={{
//                                     backgroundColor: "",
//                                     backgroundGradientFromOpacity: "",
//                                     backgroundGradientTo: "",

//                                     decimalPlaces: 0.1, // optional, defaults to 2dp
//                                     color: (opacity = 1) => `#e74c3c`,
//                                     labelColor: (opacity = 0) => `#e74c3c00`,
//                                     style: {
//                                        borderRadius: 10,

//                                     },
//                                     propsForDots: {
//                                        r: 0,
//                                        strokeWidth: 0,
//                                        stroke: "red"
//                                     }
//                                  }}
//                                  bezier
//                                  style={{
//                                     borderRadius: 16,
//                                     marginLeft: -35,
//                                     marginTop: -180
//                                  }}
//                               />
//                            }
//                            {
//                               // ------------------------------------------------------------------------ GREEN


//                               <LineChart
//                                  data={{
//                                     labels: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0],
//                                     datasets: [
//                                        {
//                                           data: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0]
//                                        }
//                                     ]
//                                  }}
//                                  width={Dimensions.get("window").width - 10} // from react-native
//                                  height={180}
//                                  yAxisLabel=""
//                                  yAxisSuffix=""
//                                  yAxisInterval={10} // optional, defaults to 1
//                                  chartConfig={{
//                                     backgroundColor: "",
//                                     backgroundGradientFromOpacity: "",
//                                     backgroundGradientTo: "",
//                                     decimalPlaces: 0.1, // optional, defaults to 2dp
//                                     color: (opacity = 0) => `#2ecc71`,
//                                     labelColor: (opacity = 0) => `#ffffff00`,
//                                     style: {
//                                        borderRadius: 10,

//                                     },
//                                     propsForDots: {
//                                        r: 0,
//                                        strokeWidth: 0,
//                                        stroke: "#2ecc71"
//                                     }
//                                  }}
//                                  bezier
//                                  style={{
//                                     borderRadius: 16,
//                                     marginLeft: -35,
//                                     marginTop: -180
//                                  }}
//                               />

//                            }
//                         </View>
//                         : <ActivityIndicator size="large" color="white" />
//                   }
//                </View>

//                <View style={{flex: 1, paddingBottom: 20, paddingTop: 3}}>
//                   <ScrollView style={{paddingTop: 5}}>

//                      {
//                         this.props.grouped ?

//                            this.props.grouped.slice(0).reverse().map((item) => {
//                               return (
//                                  <View style={{ marginBottom: 12 }}>
//                                     <DateCard
//                                        date={item.release_date}
//                                        infected={item.infections}
//                                        recoveries={item.recoveries}
//                                        deaths={item.deaths}
//                                     />
//                                  </View>
//                               )

//                            })

//                            :
//                            <ActivityIndicator size="large" color="#3498db" />
//                      }


//                   </ScrollView>
//                </View>
//             </View>

//          </View>
//       );
//    }
// }
// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: "#ecf0f1"
//    },
//    header: {
//       flex: 1,
//       backgroundColor: '#3498db',
//       // paddingTop: 60
//    },
//    subtitle: {
//       color: '#bdc3c7',
//       fontSize: 23
//    },
//    title: {
//       color: 'white',
//       fontSize: 50,
//       fontWeight: '500'
//    },
//    searchBar: {
//       height: 40,
//       fontSize: 17,
//       flex: 1.5,
//       color: '#fff',
//       justifyContent: 'center'
//    }
// })


// const mapStateToProps = (state) => ({
//    data: state.data,
//    infectionsArray: state.infectionsArray,
//    deaths: state.deaths,
//    recoveries: state.recoveries,
//    dates: state.dates,
//    grouped: state.grouped
// });

// export default connect(mapStateToProps)(Statistiques);