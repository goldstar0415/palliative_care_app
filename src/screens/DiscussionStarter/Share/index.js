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
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class Share extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() { 
        return (
            <View style={Styles.container}>
                <View style={Styles.modal}>
                    <Text medium center style={Styles.title}>Share</Text>
                    <View>
                        <Button dark>DOWNLOAD</Button>
                        <Button dark>EMAIL</Button>
                        <Button dark>PRINT</Button>
                        <Button light onPress={()=>this.props.onCancel()}>CANCEL</Button>
                    </View>
                </View>
            </View>
        );
    }
}