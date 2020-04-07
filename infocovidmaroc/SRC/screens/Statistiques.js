import React from 'react';
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   Platform,
   Image,
   Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LiveCard from '../components/LiveCard';
import DateCard from '../components/DateCard';
import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart
} from "react-native-chart-kit";


export default class Statistiques extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchText: ''
      }
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

            <View style={{ flex: 2, paddingHorizontal: 20, marginTop: -80 }}>
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
            }}>
               <LineChart
                  data={{
                     labels: ["20/12", "01/01", "10/01", "20/01", "01/02", "03/02"],
                     datasets: [
                        {
                           data: [
                              2,
                              17,
                              20,
                              30,
                              45,
                              60
                           ]
                        }
                     ]
                  }}
                  width={Dimensions.get("window").width - 60} // from react-native
                  height={180}
                  yAxisLabel=""
                  yAxisSuffix=""
                  yAxisInterval={10} // optional, defaults to 1
                  chartConfig={{
                     backgroundColor: "#34495e",
                     backgroundGradientFrom: "#3498db",
                     backgroundGradientTo: "#ffa726",
                     decimalPlaces: 2, // optional, defaults to 2dp
                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                     style: {
                        borderRadius: 10,

                     },
                     propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                     }
                  }}
                  bezier
                  style={{
                     borderRadius: 16,
                  }}
               />
            </View>

               <ScrollView style={{ paddingTop: 30, marginTop: 2 }}>
                  <View style={{ paddingBottom: 12 }}>
                     <DateCard />
                  </View>
                  <View style={{ paddingBottom: 12 }}>
                     <DateCard />
                  </View>
                  <View style={{ paddingBottom: 12 }}>
                     <DateCard />
                  </View>

               </ScrollView>
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
