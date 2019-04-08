import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer, createBottomTabNavigator,BottomTabBar} from "react-navigation";


import WeCahtPage from './pages/WeChatPage'
import FitPage from './pages/FitPage'
import VedioPage from './pages/VedioPage'
import TabBarItem from './views/TabBarItem'
import WebViewPage from './pages/WebViewPage'
// 关闭黄色警报
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const Tab = createBottomTabNavigator(
  {
    WeChat: {
      screen: WeCahtPage,
      navigationOptions: {
        tabBarLabel: 'WeChat',
        showLabel: false,
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./imgs/weChat_un_sel.png')}
            selectedImage={require('./imgs/weChat_sel.png')}
          />
        )
      }
    },
    Fit: {
      screen: FitPage,
      navigationOptions: {
        tabBarLabel: 'Fit',
        showLabel: false,
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./imgs/fitness_un_sel.png')}
            selectedImage={require('./imgs/fitness_sel.png')}
          />
        )
      }
    },
    Vedio: {
      screen: VedioPage,
      navigationOptions: {
        tabBarLabel: 'Vedio',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./imgs/video_un_sel.png')}
            selectedImage={require('./imgs/video_sel.png')}
          />
        )
      }
    }

  },
  {
    tabBarComponent:BottomTabBar,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:true,
    tabBarOptions: {
      activeTintColor: "#5aa207",//活动选项卡的标签和图标颜色
      inactiveTintColor: '#979797',//非活动选项卡的标签和图标颜色
      allowFontScaling: true,
      style: {backgroundColor: '#ffffff'},
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },

  }
)
const AppNavigator = createStackNavigator(
  {
    Tab: {screen: Tab},
    WebViewPage: {screen: WebViewPage}
  },
  {
    navigationOptions: {
      header: null,
      showIcon: true,
      swipeEnabled: false,
      animationEnabled: false,
      lazy: true,
      visible: false,
    },
    mode: 'card',
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);

