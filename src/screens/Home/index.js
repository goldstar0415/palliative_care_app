import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {Colors} from '@theme';
import Styles from './styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
    }

    render() {
        return ( 
            <View style={Styles.container}>
                <View style={Styles.containerLeft}>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate({routeName: "DiscussionStarter", key: "DiscussionStarter"})}}>
                        <Text style={Styles.itemText}>Discussion Starter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate({routeName: "CardGame", key: "CardGame"})}}>
                        <Text style={Styles.itemText}>Card Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.containerRight}>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("UserGuides")}}>
                        <Text style={Styles.itemText}>User Guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("Resources")}}>
                        <Text style={Styles.itemText}>Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("GetHelp")}}>
                        <Text style={Styles.itemText}>Get Help</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}