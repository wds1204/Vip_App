import React from "react";
import {View, Text,WebView} from "react-native";

export default class WeChatPage extends React.Component {

  static navigationOptions = {
    title: '首页',
    header:false,
    gesturesEnabled: false
  };
  render() {
    return (
      <WebView style={{flex: 1, alignItems: "center", justifyContent: "center"}}
               source={{uri: 'https://mp.weixin.qq.com/s/CJaGX2m7cEwM70UY4Z4UFA'}}
      />
    );
  }
}
