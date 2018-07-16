import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
} from 'react-native';
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        this.state = ({
            discussionStarter, discussionStarter,
            activities: activities,
        })
    }

    renderActivityItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <TouchableOpacity style={Styles.item} onPress={() => {navigate("Activity", {activityIndex: index, discussionStarter: this.state.discussionStarter})}}>
                <Text medium bold>Activity {index + 1}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Discussion Starter</Text>
                <Text style={Styles.subtitle}>
                    Supporting you to talk about how you want {"\n"}
                    to be cared for at the end of your life
                </Text>
                <FlatList
                    numColumns = {2}
                    data = {this.state.activities}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                    />
            </View>
        );
    }
}