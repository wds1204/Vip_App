import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DateSelectComment from "../views/DateSelectComment";
import moment from "moment/moment";


const prop = {}

class FitColockPage extends Component {

  static navigationOptions = {
    title: '打卡'
  }

  constructor(prop) {
    super(prop)
    this.currentDate = moment().utcOffset(480).format("YYYY-MM-DD");
    let week = moment(this.currentDate).format('d');
    console.log("week==="+week)
      if (week==0)
    this.endDate = moment(this.currentDate).add(7 - week==0?7:week, 'days').format("YYYY-MM-DD")


    this.startDate = moment(this.currentDate).subtract(week - week==0?7:1, "days").format("YYYY-MM-DD")
    console.log("time==" + this.currentDate);

    this.state = {
      currentDate: this.currentDate,
      startDate: this.startDate,
      endDate: this.endDate,

    }

  }

  render() {
    return (
      <View style={styles.containStyle}>
        <DateSelectComment
          currentDate={this.state.currentDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          selectDate={this.selectData}
          checkFunc={() => {
          }}
        />
        {this.renderContentView()}
      </View>
    );
  }

  selectData = (currentDate, index) => {

    this.setState({
      currentDate: moment(currentDate).format("YYYY-MM-DD")
    })

  }

  renderContentView() {

    return (
      <View style={styles.contentStyle}>
        <Text>content</Text>
      </View>
    )

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

export default connect(mapStateToProps, mapDispatchToProps)(FitColockPage);


const styles = StyleSheet.create({
  containStyle: {
    flex: 1,
  },
  contentStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
