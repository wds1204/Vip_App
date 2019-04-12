import React from "react";
import {View, Text, SafeAreaView} from "react-native";

export default class VedioPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>VedioPage</Text>
        </View>
      </SafeAreaView>
    );
  }
}
