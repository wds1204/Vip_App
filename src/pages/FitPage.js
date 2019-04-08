import React from "react";
import {View, Text, FlatList, TouchableOpacity} from "react-native";

type Props = {};
export default class FitPage extends React.Component <Props> {
  constructor(props) {
    super(props);

  }

  render() {
    const data = [{content:'胸部训练'}, {content:'背部训练'}, {content:'腹部训练'}, {content:'腿部训练'}, {content:'肩部训练'}, {content:'手臂训练'}]
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1, backgroundColor: "#F2F6FA"}}
          data={data}
          renderItem={this.renderItem.bind(this)}
          ListHeaderComponent={this.renderHeader.bind(this)}

        />
      </View>
    );
  }
  renderHeader=(data)=>{
        return(
          <View>

          </View>
        )
  }
  renderItem = (data) => {
    //5aa207  f8f9fa  f3f4f5
    var bgColor = data.index % 2 == 0 ? '#f8f9fa' : '#f3f4f5';

    return (
      <TouchableOpacity
        onPress={() => {
        }}>
        <View style={{
          height: 59,
          flexDirection: 'row',
          backgroundColor: bgColor,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <Text>{data.item.content}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
