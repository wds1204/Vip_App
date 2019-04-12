import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableHighlight, Animated} from 'react-native';
class Panel extends Component {
  constructor(props) {
    super(props);
    this.icons = { //Step 2
      'up': require('./images/Arrowhead-01-128.png'),
      'down': require('./images/Arrowhead-Down-01-128.png')
    };
    this.changeValue = props.expanded?180:0;

    this.state = { //Step 3
      title: props.title,
      expanded: props.expanded,
      animation: new Animated.Value(props.expanded ? 42.86 + props.initHeight : 42.86),
      rotateValue: new Animated.Value(props.expanded?180:0),

    };


  }

  componentDidMount(): void {

  }


  render() {
    let icon = this.icons['down']
    // if (this.state.expanded) {
    //   icon = this.icons['up'];
    // }
    return (

      <Animated.View style={[styles.container, {height: this.state.animation}]}
      >
        <View style={styles.titleContainer}
              onLayout={this._setMinHeight.bind(this)}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1">
            <Animated.Image
              style={[styles.buttonImage, {
                transform: [{
                  rotate: this.state.rotateValue.interpolate({ // 旋转，使用插值函数做值映射
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  })
                },]
              }]}
              source={icon}
            ></Animated.Image>
          </TouchableHighlight>
        </View>
        <View style={styles.body}
              onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  toggle() { //Step 1
    this.changeRorateValue();
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    this.setState({
      expanded: !this.state.expanded
    });
    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start();
  }

  changeRorateValue() {
    this.changeValue += 180;
    Animated.timing(                  // Animate over time
      this.state.rotateValue,            // The animated value to drive
      {
        toValue: this.changeValue,                   // Animate to opacity: 1 (opaque)
        duration: 400,              // Make it take a while
      }
    ).start(() =>

      this.state.rotateValue.setValue(this.changeValue)
    );
  }

}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    overflow: 'hidden',
    borderRadius: 5
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 12,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default Panel;
