import React, {Component} from 'react';
import {
  View, Text, TouchableOpacity, FlatList, Image, StyleSheet
} from 'react-native'

import {connect} from "react-redux";

class FitnessVediosPage extends Component {

  render(): React.ReactNode {
    return (<View style={styles.containStyle}><Text>FitnessVediosPage</Text></View>)
  }
}


function mapStateToProps(state, ownProps) {//no a object
  console.log("mapStateToProps  taype is =" + JSON.stringify(state));

  return {//must return a object
  }

}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FitnessVediosPage);


const styles = StyleSheet.create({
  containStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
