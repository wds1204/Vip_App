import React from "react";
import {View, Text} from "react-native";
console.log('WebViewPage component loaded');

type Props = {}
export default class WebViewPage extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>WebViewPage</Text>
      </View>
    );
  }
}
