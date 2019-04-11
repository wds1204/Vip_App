import React, {Component} from 'react';
import {
  View, Text, TouchableOpacity, FlatList, Image, StyleSheet
} from 'react-native'

import {connect} from "react-redux";


import {
  armFitness,
  sixPackFitness,
  pecsFitness,
  latisFitness,
  TrapFitness,
  LegFitness
} from '../actions/FitnessAction'
import Datas from "../data/FitnessArtsData";


class FitnessArtsPage extends Component {
  componentDidMount() {
    console.log("FitnessArtsPage componentDidMount ")
  }

  constructor(props) {
    super(props)
    const {navigation, armFitness, sixPackFitness,latisFitness,pecsFitness,LegFitness,TrapFitness} = this.props;
    const index = navigation.getParam('index');
    console.log("index====" + index)
    if (index === 0) {
      pecsFitness()
    } else if (index === 1) {
      latisFitness()
    } else if (index === 2) {
      sixPackFitness()
    } else if (index === 3) {
      LegFitness()
    } else if (index === 4) {
      TrapFitness()
    } else if (index === 5) {
      armFitness()
    }

  }

  static navigationOptions = {
    title: 'FIT',
  };

  render() {
    let artDatas = this.props.artDatas;
    return (
      <View style={{flex: 1}}>
        <FlatList style={{flex: 1, backgroundColor: "#F2F6FA"}}
                  renderItem={this.renderItem.bind(this)}
                  data={artDatas}/>
      </View>
    )
  }


  renderItem = (data) => {
    console.log("renderItem==" + JSON.stringify(data))
    const item = data.item
    return (
      <TouchableOpacity onPress={() => {

      }}>
        <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
          <Image resizeMode={'contain'} style={styles.imageStyle} source={{uri: item.icon}}/>
          <Text style={{width: 200}} numberOfLines={3}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

function mapStateToProps(state, ownProps) {//no a object
  console.log("mapStateToProps  taype is =" + JSON.stringify(state));

  return {//must return a object
    artDatas: state.fitness.artDatas,
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    armFitness: () => dispatch(armFitness()),
    sixPackFitness: () => dispatch(sixPackFitness()),
    pecsFitness: () => dispatch(pecsFitness()),
    latisFitness: () => dispatch(latisFitness()),
    TrapFitness: () => dispatch(TrapFitness()),
    LegFitness: () => dispatch(LegFitness()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FitnessArtsPage);

const styles = StyleSheet.create({

  imageStyle: {
    height: 90,
    width: 160
  }
})
