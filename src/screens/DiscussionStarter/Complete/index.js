import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    Modal,
    Alert,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import {Button, Text, Loader } from '@components';
import ShareModal from './modals/Share'
import EmailModal from './modals/Email'
import DownloadedModal from './modals/Downloaded'
import EmailSentModal from './modals/EmailSent'

import {postDiscussionAnswers} from "@api";

export default class Complete extends Component {
    constructor(props) {
        super(props);
        const {discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        console.log(discussionStarter)
        this.state = ({
            discussionStarter: discussionStarter,
            activities: activities,
            activityCount: activities.length,
            loaderVisible: false,
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            },
        })
    }

    async onExit(){
        this.setState({loaderVisible: true})
        await postDiscussionAnswers(this.state.discussionStarter)
        this.setState({loaderVisible: false})

        setTimeout(()=>{
            const {navigate, goBack} = this.props.navigation
            Alert.alert(
                'Are you sure?',
                'Are you sure to exit without share the results?',
                [
                  {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'YES', onPress: () => goBack("DiscussionStarter")},
                ],
                { cancelable: false }
            )
        }, 200)
    }

    async onShare(){
        this.setState({loaderVisible: true})
        await postDiscussionAnswers(this.state.discussionStarter)
        this.setState({loaderVisible: false})
        setTimeout(()=>{
            this.setState({modalVisible: true})
        }, 200)
    }

    onShareEmail() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })        
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: false,
                    email: true,
                    emailSent: false,
                }
            })                        
        }, 200)
    }

    onShareDownload() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })        
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: true,
                    email: false,
                    emailSent: false,
                }
            })                        
        }, 1000)
    }

    onSendEmail(name, email){
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: false,
                    email: false,
                    emailSent: true,
                }
            })                        
        }, 1000)
    }

    onShareCancel() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })
    }

    renderActivityItem({item, index}){
        return (
            <View style={Styles.item}>
                <View style={Styles.itemTitle}>
                    <Image source={Images.check} style={Styles.checkIcon}/>
                    <Text medium bold>Activity {index + 1}: </Text>
                    <Text medium>
                        {" "}{item.stage}
                    </Text>
                </View>
                <Text style={Styles.itemPrecomment}>{item.pre_commencement_text} </Text>
            </View>
        )
    }

    render() { 
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <Text mediumLarge bold center>Complete... </Text>
                <FlatList
                    data = {this.state.activities}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                    style={Styles.flatList}
                    />
                <View style={Styles.buttonBar}>
                    <Button light onPress={this.onExit.bind(this)}>EXIT</Button>
                    <Button dark onPress={this.onShare.bind(this)}>SHARE RESULTS</Button>
                </View>
                <Text medium center>Need more information? Try our resources</Text>
                <ShareModal 
                    visible={this.state.modalVisible.share} 
                    onDownload={this.onShareDownload.bind(this)}
                    onEmail={this.onShareEmail.bind(this)}
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <EmailModal 
                    visible={this.state.modalVisible.email} 
                    onSend={this.onSendEmail.bind(this)}
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <EmailSentModal 
                    visible={this.state.modalVisible.emailSent} 
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <DownloadedModal 
                    visible={this.state.modalVisible.downloaded} 
                    onCancel={this.onShareCancel.bind(this)}
                    />
            </View>
        );
    }
}