import React from "react";
import {View, Text, SafeAreaView, WebView} from "react-native";

console.log('WebViewPage component loaded');

type Props = {}
export default class WebViewPage extends React.Component<Props> {
    constructor(props) {
        super(props)
        const {navigation} = this.props
        let url = navigation.getParam('url')
        console.log("url============" + url)
        this.state = {
            url: url
        }

    }


    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <WebView style={{flex: 1, alignItems: "center", justifyContent: "center"}}
                         source={{uri: this.state.url}}
                />
            </SafeAreaView>
        );
    }
}
