import React from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image, SafeAreaView} from "react-native";
import Panel from "../views/panels/Panel";

type Props = {};
let WebViewPage = null;
export default class FitPage extends React.Component <Props> {
  constructor(props) {
    super(props);

  }

  render() {
    const data = [{content: '胸部训练'}, {content: '背部训练'}, {content: '腹部训练'}, {content: '腿部训练'}, {content: '肩部训练'}, {content: '手臂训练'}]
    return (
      <SafeAreaView  style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: "#F2F6FA"}}>
          <FlatList
            style={{flex: 1, paddingBottom: 20}}
            data={data}
            renderItem={this.renderItem.bind(this)}
            ListHeaderComponent={this.renderHeader.bind(this)}

          />
        </View>
      </SafeAreaView>
    );
  }

  renderHeader = (data) => {
    return (
      <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('FitColockPage')
      }}>
        <View style={styles.clockStyle}>
          <Image
            resizeMode={'contain'}
            style={styles.colockImgStyle}
            source={require('../imgs/colock.png')}
          />
          <Text>打卡</Text>

        </View>

      </TouchableOpacity>
    )
  }
  renderItem = (data) => {
    //5aa207  f8f9fa  f3f4f5
    var bgColor = data.index % 2 == 0 ? '#f8f9fa' : '#f3f4f5';

    const {navigation} = this.props
    return (
      <Panel expanded={data.index == 0 ? true : false} title={data.item.content} initHeight={60}>
        <View style={styles.initItemStyle}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('FitnessArtsPage', {
              index: data.index
            })
          }}>
            <Text style={styles.tagStyle}>相关文章</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("FitnessVediosPage", {
              index: data.index
            })
          }}>
            <Text>相关视频</Text>
          </TouchableOpacity>
        </View>
      </Panel>


    )
  }
}

const styles = StyleSheet.create({
  colockImgStyle: {
    height: 50,
    width: 50
  },
  clockStyle: {
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    justifyContent: "center"

  },
  initItemStyle: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tagStyle: {
    marginRight: 50
  }
})
