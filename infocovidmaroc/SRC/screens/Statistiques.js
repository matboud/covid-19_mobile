import React from 'react';
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   Platform,
   Image,
   Dimensions,
   ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LiveCard from '../components/LiveCard';
import DateCard from '../components/DateCard';
import { connect } from 'react-redux';

import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart
} from "react-native-chart-kit";


class Statistiques extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchText: '',
         isData: false
      }
   }

   componentDidMount() {
   }


   render() {

      return (
         <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#5214cc', '#1488CC']} style={styles.header}>
               <View style={{ paddingHorizontal: 20, paddingTop: Platform.OS === 'ios' ? 50 : 15, flex: 1 }}>
                  <Text style={styles.subtitle}>
                     covidmaroc.ma
                  </Text>
                  <Text style={styles.title}>
                     Covid - 19
                  </Text>
               </View>

               <View style={{ flex: 1.3, paddingHorizontal: 20 }}>
                  <View style={{
                     borderColor: 'white',
                     borderWidth: 1.5,
                     borderRadius: 10,
                     paddingHorizontal: 10,
                     flexDirection: 'row'
                  }}>
                     <TextInput
                        style={styles.searchBar}
                        onChangeText={searchText => this.setState({ searchText })}
                        value={this.state.searchText}
                        placeholder='Location'
                        placeholderTextColor="#fff"
                     />
                     <View style={{ flex: 0.2, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Image source={require('../img/search.png')} style={{ width: 25, height: 25 }} />
                     </View>
                  </View>

               </View>
            </LinearGradient>

            <View style={{ flex: 2, paddingHorizontal: 20, marginTop: -80}}>
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
                  {
                     this.props.infectionsArray ?
                        <View>
                           <LineChart
                              data={{
                                 labels: this.props.dates ? this.props.dates : [0, 0, 0, 0],
                                 datasets: [
                                    {
                                       data: this.props.infectionsArray ? this.props.infectionsArray : [0, 0, 0, 0]
                                    }
                                 ]
                              }}
                              width={Dimensions.get("window").width - 15} // from react-native
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
                              // ------------------------------------------------------------------------

                              <LineChart
                                 data={{
                                    labels: this.props.deaths ? this.props.deaths : [0, 0, 0, 0],
                                    datasets: [
                                       {
                                          data: this.props.deaths ? this.props.deaths : [0, 0, 0, 0]
                                       }
                                    ]
                                 }}
                                 width={Dimensions.get("window").width - 10} // from react-native
                                 height={180}
                                 yAxisLabel=""
                                 yAxisSuffix=""
                                 yAxisInterval={10} // optional, defaults to 1
                                 chartConfig={{
                                    backgroundColor: "",
                                    backgroundGradientFrom: "",
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
                              // ------------------------------------------------------------------------


                              <LineChart
                                 data={{
                                    labels: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0],
                                    datasets: [
                                       {
                                          data: this.props.recoveries ? this.props.recoveries : [0, 0, 0, 0]
                                       }
                                    ]
                                 }}
                                 width={Dimensions.get("window").width - 10} // from react-native
                                 height={180}
                                 yAxisLabel=""
                                 yAxisSuffix=""
                                 yAxisInterval={10} // optional, defaults to 1
                                 chartConfig={{
                                    backgroundColor: "",
                                    backgroundGradientFrom: "",
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
                        : <ActivityIndicator size="large" color="white" />
                  }
               </View>

               <View style={{flex: 1, paddingBottom: 20, paddingTop: 3}}>
                  <ScrollView style={{paddingTop: 5}}>

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


                  </ScrollView>
               </View>
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
      fontSize: 50,
      fontWeight: '500'
   },
   searchBar: {
      height: 40,
      fontSize: 17,
      flex: 1.5,
      color: '#fff'

   }
})


const mapStateToProps = (state) => ({
   data: state.data,
   infectionsArray: state.infectionsArray,
   deaths: state.deaths,
   recoveries: state.recoveries,
   dates: state.dates,
   grouped: state.grouped
});

export default connect(mapStateToProps)(Statistiques);