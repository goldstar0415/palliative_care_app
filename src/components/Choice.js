/**
 * @providesModule @choice
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import {Colors} from '@theme';
import Button from '@button'
import Text from '@text'
import { Icon } from "native-base";
export default class Choice extends Component {
    constructor(props) {
        super(props);

        const {odd} = props

        this.style = {}
        if(odd){
            this.style.backgroundColor = Colors.backgroundSecondary
        }
    }

    render() {
        return (
            <View style={this.style}>
            {this.props.disabled?
                <View style={styles.container}>
                    <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                </View>
                :
                this.props.selected?
                    <View style={styles.container}>
                        <Icon name={'checkmark'} style={styles.icon}/>
                        <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                        <Button small light onPress={()=>{this.props.onPress(this.props.index)}}>REMOVE</Button>
                    </View>
                    :
                    <View style={styles.container}>
                        <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                        <Button small light onPress={()=>{this.props.onPress(this.props.index)}}>SELECT</Button>
                    </View>
            }
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        minHeight: 50,
    },

    icon: {
        marginRight: 8
    },

    text: {
        flex: 1,
    },

    button: {

    }
});