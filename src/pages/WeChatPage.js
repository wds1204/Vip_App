import React from "react";
import {View, Text, WebView, SafeAreaView} from "react-native";
import PermissionUtil from "../utils/PermissionUtil";
import Permissions from 'react-native-permissions'




export default class WeChatPage extends React.Component {

  static navigationOptions = {
    title: '首页',
    header: false,
    gesturesEnabled: false
  };
  componentDidMount(): void {
    PermissionUtil.checkPermission((suc)=>{
      console.log("checkPermission 成功"+JSON.stringify(suc))
    },(fail)=>{
      console.log("checkPermission 失败"+JSON.stringify(fail))
    },["camera","photo"])


  }


  render() {
    return (
      <SafeAreaView  style={{flex: 1, backgroundColor: '#fff'}}>
        <WebView style={{flex: 1, alignItems: "center", justifyContent: "center"}}
                 source={{uri: 'https://mp.weixin.qq.com/s/CJaGX2m7cEwM70UY4Z4UFA'}}
        />
      </SafeAreaView>
    );
  }
}
