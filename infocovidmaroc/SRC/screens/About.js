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

class About extends React.Component {
   constructor(props) {
      super(props);

   }

   render() {
      const windowWidth = Dimensions.get('window').width;
      return (
         <View style={styles.container}>
            <ScrollView style={{ width: windowWidth, paddingHorizontal: 20, paddingTop: 50 }}>
               <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#34495e' }}>About</Text>
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