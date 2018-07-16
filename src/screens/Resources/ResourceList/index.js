import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import { Loader } from '@components';
import { getResources,updateTimeInterval } from "@api";
import moment from 'moment'

export default class Resources extends Component {
    constructor(props) {
        super(props);
        Props=this.props;
        this.state = ({
            resourceIndexes: [],
            loaderVisible: true
        })
    }

    async componentDidMount() {
         try 
            {
                let value = await AsyncStorage.getItem('lastRefereshTimeResource');

                if (value != null){
                  // do something 
                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    var startTime=moment(value, "HH:mm:ss");
                    var endTime=moment(currrentTime, "HH:mm:ss");
                    var duration = moment.duration(endTime.diff(startTime));
                    var difference = moment.utc(+duration).format('H');

                    if(difference >= updateTimeInterval)
                    {
                        await AsyncStorage.setItem('lastRefereshTimeResource', currrentTime);
                        const ds = await getResources()

                        var resourceIndexes = [];
                        for(var i = 0; i < ds.resources.length; i ++){
                            resourceIndexes.push(ds.resources[i]);
                        }

                        this.setState({
                            resourceIndexes: resourceIndexes,
                            loaderVisible: false
                        })
                    }
                    else
                    {
                        const ds = await getResources(true)

                        var resourceIndexes = [];
                        for(var i = 0; i < ds.resources.length; i ++){
                            resourceIndexes.push(ds.resources[i]);
                        }

                        this.setState({
                            resourceIndexes: resourceIndexes,
                            loaderVisible: false
                        })
                    }   
                }
                else {
                  // do something else
                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    await AsyncStorage.setItem('lastRefereshTimeResource', currrentTime); 
                    const ds = await getResources()

                    var resourceIndexes = [];
                    for(var i = 0; i < ds.resources.length; i ++){
                        resourceIndexes.push(ds.resources[i]);
                    }

                    this.setState({
                        resourceIndexes: resourceIndexes,
                        loaderVisible: false
                    })
                } 
            }
            catch (error) {
              // Error retrieving data
            }
       
    }

    renderResourceItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <TouchableOpacity style={Styles.item} onPress={()=>{navigate("ResourceDetail", {resourceIndex: index})}}>
                <Text style={Styles.txttitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            
            <View style={Styles.container}>
                <View style={Styles.scrollcontainer}> 
                    <Loader loading={this.state.loaderVisible}/>
                    <ScrollView contentContainerStyle={Styles.scroll}>
                        <Text bold style={Styles.title}>resources</Text>
                        <Text style={Styles.subtitle}>
                            View list of resources and use to learn more
                        </Text>
                 
                        <FlatList
                            numColumns = {2}
                            data = {this.state.resourceIndexes}
                            renderItem = {this.renderResourceItem.bind(this)}
                            keyExtractor={item => item.title}
                        />
                    </ScrollView>
                </View>
                <Footer />
            </View>    
        );
    }
}