import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    Dimensions,
    Linking,
    AsyncStorage
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';
import { getGetHelp,updateTimeInterval,API_HTML_ROOT } from "@api";
import Communications from 'react-native-communications';
import moment from 'moment';

export default class GetHelpList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
           gethelpIndexes: [],
           title : '',
           tagline : '',
           loaderVisible: true
        })
    }

    async componentDidMount() {
        try 
            {
                let value = await AsyncStorage.getItem('lastRefereshTimeUserGuide');

                if (value != null){

                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    var startTime=moment(value, "HH:mm:ss");
                    var endTime=moment(currrentTime, "HH:mm:ss");
                    var duration = moment.duration(endTime.diff(startTime));
                    var difference = moment.utc(+duration).format('H');

                    if(difference >= updateTimeInterval)
                    {
                        await AsyncStorage.setItem('lastRefereshTimeUserGuide', currrentTime);
                        const ds = await getGetHelp()
                        const gethelp = ds[0].services

                        var gethelpIndexes = [];
                        for(var i = 0; i < gethelp.length; i ++){
                            gethelpIndexes.push(gethelp[i]);
                        }

                        this.setState({
                            gethelpIndexes: gethelpIndexes,
                            title : ds[0].title,
                            tagline : ds[0].tagline,
                            loaderVisible: false
                        })
                    }
                    else
                    {
                        const ds = await getGetHelp(true)
                        const gethelp = ds[0].services

                        var gethelpIndexes = [];
                        for(var i = 0; i < gethelp.length; i ++){
                            gethelpIndexes.push(gethelp[i]);
                        }

                        this.setState({
                            gethelpIndexes: gethelpIndexes,
                            title : ds[0].title,
                            tagline : ds[0].tagline,
                            loaderVisible: false
                        })
                    }   
                }
                else {
                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    await AsyncStorage.setItem('lastRefereshTimeUserGuide', currrentTime); 
                    const ds = await getGetHelp()
                    const gethelp = ds[0].services

                    var gethelpIndexes = [];
                    for(var i = 0; i < gethelp.length; i ++){
                        gethelpIndexes.push(gethelp[i]);
                    }

                    this.setState({
                        gethelpIndexes: gethelpIndexes,
                        title : ds[0].title,
                        tagline : ds[0].tagline,
                        loaderVisible: false
                    })
                } 
            }
            catch (error) {
              // Error retrieving data
            }
        
    
    }

    renderGetHelpItem({item, index}){
        const {navigate} = this.props.navigation
      
        return (
            <View style={Styles.listitem}>
                    <View style={Styles.listitemTopView}>
                        {item.logo == null ?
                            <Image style={Styles.listLogo} source={require('../../../../assets/images/default_appLogo.png')} resizeMode="stretch"/>
                            :
                            <Image style={Styles.listLogo} source={{uri:  API_HTML_ROOT + item.logo.url}} resizeMode="stretch"/>
                        }
                        <View style={Styles.listTitleView}>
                            <Text bold style={Styles.listTitle}>{item.title}</Text>
                            <Text  style={Styles.listDesc}>{item.short_description}</Text>
                        </View>
                    </View>
                    <View style={Styles.listitemBottomView}>
                        <TouchableOpacity style={Styles.listButton} onPress={() => Communications.phonecall(item.phone_number, true)}>
                            <View style={Styles.listButtonView}>
                                <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                <Text style={Styles.listButtonText}>CALL</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.listButtonMiddle} onPress={ ()=> Linking.openURL(item.website) }>
                            <View style={Styles.listButtonView}>
                                <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                <Text style={Styles.listButtonText}>WEBSITE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.listButton} onPress={() => {navigate("GetHelpDetail", {gethelpIndexes: index})}}>
                            <View style={Styles.listButtonView}>
                                <Text style={Styles.listButtonText}>VIEW</Text>
                                <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_view.png')}/></View>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.scrollcontainer}> 
                <ScrollView contentContainerStyle={Styles.scroll}>
                    <Loader loading={this.state.loaderVisible}/>
                    <TouchableOpacity style={Styles.item}>
                        <Text bold style={Styles.title}>{this.state.title}</Text>
                        <Text style={Styles.subtitle}>
                            {this.state.tagline}
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                    data = {this.state.gethelpIndexes}
                    renderItem = {this.renderGetHelpItem.bind(this)}
                    keyExtractor = {(index) => index.toString()}
                    />
                
                </ScrollView>
                </View>
                <Footer />
            </View>
        );
    }
}