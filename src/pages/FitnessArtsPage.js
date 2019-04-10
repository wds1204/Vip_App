import React, {Component} from 'react';
import {
  View, Text, TouchableOpacity, FlatList, Image, StyleSheet
} from 'react-native'

import {connect} from "react-redux";


import {armFitness} from '../actions/FitnessAction'
import ArmsData from "../data/ArmsData";


class FitnessArtsPage extends Component {
  componentDidMount() {
    console.log("FitnessArtsPage componentDidMount ")
  }

  constructor(props) {
    super(props)
    this.props.armFitness()

  }

  static navigationOptions = {
    title: 'FIT',
  };

  render() {
    let armDatas = this.props.armDatas;
    console.log("armDatas===1" + JSON.stringify(armDatas))
    console.log("armDatas===2" + JSON.stringify(armDatas[0]))
    console.log("armDatas===2" + armDatas.length)
    return (
      <View style={{flex: 1}}>
        <FlatList style={{flex: 1, backgroundColor: "#F2F6FA"}}
                  renderItem={this.renderItem.bind(this)}
                  data={armDatas}/>
      </View>
    )
  }


  renderItem = (data) => {
        console.log("renderItem=="+JSON.stringify(data))
    const item = data.item
    return (
      <TouchableOpacity onPress={() => {

      }}>
        <View style={{flex:1,flexDirection:'row',padding:20}}>
          <Image resizeMode={'contain'} style={styles.imageStyle} source={{uri:item.icon}}/>
          <Text style={{width:200}} numberOfLines={3}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

//(state) => ({
//     armDatas: state.armDatas,
//
//   }), (dispatch) => ({
//     armFitness: () => dispatch(armFitness())
//   })
function mapStateToProps(state, ownProps) {//no a object
  console.log("mapStateToProps  taype is =" + JSON.stringify(state));

  return {//must return a object
    armDatas: state.fitness.armDatas,
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    armFitness: () => dispatch(armFitness())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FitnessArtsPage);

const styles = StyleSheet.create({

  imageStyle: {
    height: 90,
    width: 160
  }
})
