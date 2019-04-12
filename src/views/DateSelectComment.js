import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Platform
} from 'react-native';

const {width, height} = Dimensions.get('window');

import moment from "moment/moment";
import PropTypes from "prop-types";
var base64Img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAgCAYAAAAsRzf4AAACZUlEQVRoQ+2bv0/VUBSAv0NQwvBW/gAWTUwYHB6YsDjp7sSoE2EgcTMmkAiJxoGE4OTg7uCfIGEhUQIOrpIgMw4OJgQIvkPaQFOglNvevtd729vpDffHOefrfb39ciu6xROUVYT7hMu/CihfgTmZYvcieIl+6AbDjPICWEYY8y+zVkb8C2FOuqxfzT6GenHpJh3usADMAyOtLJXrSSsHCIsc8kkec5oV7iWoCdxtxumxDMwAmW1cz72B8R2jfOCUJZnmX15+ucB0my7/WUOYbGCRfElJgc/0eC2P2DcJ+tZVqIqwxTOE98C4yaChTWUV2EGZlSl+FBnxVqjJX/IuI/zlZXTHIHSKTBLaFq7AHvCKLl9EiFZqocsYagL3J2McsRDdQQjDhWYLjfMroPGz8h0dVuQBJ2XLVRhqajN1jx6rwNOyk4d+5xXQeBf7kbu8kYf8sa1LaagJ3CAv7BhkyAO7ASt6XQnyohSGG+VBqdFSnaxXajqAIC8McBjIA4NRcptUCjX1vA3y4nrZjeWBk1BTcIO8IH4lKSQPnIYaBddyeVFKHjgPNVm17ZIXVvLAG6hX5MVb4DkwZJuAU/0rkge2OfVlo2QSlH5n4twn+y8vKpYHJvXLa1Mb1MbIiz7IA++hxpspP09e9E0eNAJqsmp9OHkxAHnQKKiOy4uByYNGQnVMXgxcHjQaqgPyohZ50HioNcmLWuVBa6AORF44Ig9aBzWBW6W8cEwetBZqZfLCQXnQeqgW8sJZeRCgpipgdPLCA3kQoGZUQLM/G/FGHgSoORXQb0wyFB9j/V3kswXbotbd/wzuJ+4hdnYapwAAAABJRU5ErkJggg=='

export default class DateSelectComment extends Component {


    static propTypes = {
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        currentDate: PropTypes.string,
        selectDate: PropTypes.func,
        checkFunc: PropTypes.func
    };

    constructor(props) {
        super(props)
        let dateArray = []

        let starDate = moment(this.props.startDate);
        let endDate = moment(this.props.endDate);

        while (moment(starDate).isSameOrBefore(endDate)) {
            dateArray.push({date: starDate})
            starDate = moment(starDate).add(1, "days");
        }
        console.log("dateArray==")
        this.state = {
            dateArray: dateArray,
            currentDate:this.props.currentDate
        }
    }

    componentDidMount(){
        this.timeoutId = setTimeout(() => {
            this.scrollToIndex()
        }, 200)
    }

    componentWillReceiveProps(nextProps) {

        let dateArray = []

        let starDate = moment(nextProps.startDate);
        let endDate = moment(nextProps.endDate)

        while (moment(starDate).isSameOrBefore(endDate)) {
            dateArray.push({date: starDate})
            starDate = moment(starDate).add(1, "days");
        }

        this.setState({
            dateArray: dateArray,
            currentDate:nextProps.currentDate
        })
        this.scrollToIndex()

    }

    separator = () => {
        return <View style={{width: 1, backgroundColor: '#f5f5f5'}}/>;
    }
    renderItem = (data) => {
        let array = ["日", "一", "二", "三", "四", "五", "六"]
        var week = "周" + array[moment(data.item['date']).weekday()];
        let date = moment(data.item['date']).format("DD")
        let dateY = moment(data.item['date']).format("YYYY-MM")

        let isSelect = data.item['isSelect']

        //H5给的时间格式无法转化
        const regEx = new RegExp('\\-', 'gi');
        const validDateStr = this.state.currentDate.replace(regEx, '/');
        const milliseconds = Date.parse(validDateStr);
        let date1=moment(milliseconds).format("YYYY-MM-DD")
        let data2=moment(data.item['date']).format("YYYY-MM-DD")

        return (
            <TouchableOpacity onPress={() => {
                this.selectTime(data.index)
            }}>
                <View style={{alignItems: 'center', height: (width - 7) / 8 + 5, width: (width - 7) / 8}}>
                    <View style={{
                        backgroundColor:moment(data2).isSame(date1)?"#FCC72E" : '#fff',
                        width: (width - 7) / 8,
                        height: (width - 7) / 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: '#999', fontSize: 10, marginBottom: Platform.OS === 'android'?-2:1}}>{week}</Text>
                        <Text style={{color: '#333', fontSize: 12}}>{date}</Text>
                        <Text style={{fontSize: 10,color: '#999'}}>{dateY}</Text>
                    </View>
                    <View style={{position: "absolute", top: ((width - 7) / 8)}}>
                        { moment(data2).isSame(date1)? <Image style={{width: 20, height: 5}}
                                                              source={{uri:base64Img}}/> : null}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    selectTime = (index) => {

        let _dateArray = this.state.dateArray

        this.setState({
            dateArray: _dateArray,
            currentDate: moment(_dateArray[index]['date']).format("YYYY-M-DD"),
        });

        this.props.selectDate(moment(_dateArray[index]['date']), index)

    }

    render() {

        return (
            <View style={{flexDirection: "row", borderBottomColor: '#f5f5f5', borderBottomWidth: 1}}>

                <FlatList
                    ref={(flatList) => {
                        this.myFlatList = flatList;
                    }}
                    extraData={this.state}
                    ItemSeparatorComponent={this.separator}
                    renderItem={this.renderItem.bind(this)}
                    data={this.state.dateArray}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    getItemLayout={(date,index)=>({
                        length: (width - 7) / 8, offset: ((width - 7) / 8 + 1) * index, index
                    })}
                />
                <TouchableOpacity onPress={() => {
                    this.props.checkFunc()
                }}>
                    <View style={{
                        width: (width - 7) / 8,
                        height: (width - 7) / 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                    }}>
                        <Text style={{color: '#ec9825', marginBottom: 2, fontSize: 12}}>选择</Text>
                        <Text style={{color: '#ec9825', fontSize: 12}}>日期</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }


    scrollToIndex=()=>{
        this.state.dateArray.map((item,index)=>{
            if (this.state.currentDate==moment(item['date']).format("YYYY-MM-DD").toString()){
                if (this.myFlatList!=null) {
                    console.log('scrollToIndex=====>'+index)
                    if (index>=174){
                        index=174
                    }
                    this.myFlatList.scrollToIndex({animated: true, index: index, viewPosition: 0});

                }
            }
        })
    }
}
