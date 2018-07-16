import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    TextInput,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {activityIndex, discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        this.state = ({
            discussionStarter: discussionStarter,
            activityIndex: activityIndex,
            nextActivityIndex: activityIndex + 1, 
            activities: activities,
            activityCount: activities.length,
        })
    }

    render() { 
        const {navigate} = this.props.navigation
        return (
            this.state.activityCount > 0 ?
            <View style={Styles.container}>
                <View style={Styles.current}>
                    <View style={Styles.currentTitle}>
                        <Image source={Images.check} style={Styles.checkIcon}/>
                        <Text medium bold>Activity {this.state.activityIndex + 1}: </Text>
                        <Text medium>
                            {" "}{this.state.activities[this.state.activityIndex].stage}
                        </Text>
                    </View>
                    <Text style={Styles.currentPrecomment}>{this.state.activities[this.state.activityIndex].pre_commencement_text} </Text>
                </View>
                {this.state.nextActivityIndex < this.state.activities.length &&
                <View style={Styles.next}>
                    <Text center> UP NEXT </Text>
                    <View style={Styles.nextTitle}>
                        <Text mediumLarge bold>Activity {this.state.nextActivityIndex + 1}: </Text>
                        <Text mediumLarge>
                            {" "}{this.state.activities[this.state.nextActivityIndex].stage}
                        </Text>
                    </View>
                    <Text center style={Styles.nextPrecomment}> 
                        {this.state.activities[this.state.nextActivityIndex].pre_commencement_text} 
                    </Text>
                </View>
                }
                <View style={Styles.buttonBar}>
                    <Button light onPress={() => {navigate("Complete", {activityIndex: this.state.nextActivityIndex, discussionStarter: this.state.discussionStarter})}}>FINISH HERE</Button>
                    <Button dark onPress={() => {navigate("Activity", {activityIndex: this.state.nextActivityIndex, discussionStarter: this.state.discussionStarter})}}>START ACTIVITY {this.state.activityIndex + 2}</Button>
                </View>
            </View>
            :
            <View/>
        );
    }
}