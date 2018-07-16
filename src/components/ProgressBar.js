/**
 * @providesModule @progressbar
 */

import PropTypes from "prop-types";
import React, {Component} from 'react';
import {View, StyleSheet } from "react-native";
import {Colors, FontSizes} from '@theme'

export default (props) => {
    const {total, progress, style} = props

    var items = []
    for(let i = 0; i < total; i++){
        if(i < progress){
            items.push(
                <View key={i} style={[defaultStyles.item, {backgroundColor: Colors.buttonPrimary}]}/>
            )                
        }else{
            items.push(
                <View key={i} style={defaultStyles.item}/>
            )    
        }
    }

    return (
        <View style={[defaultStyles.container, style]}>
            {items}
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        borderWidth: 1,
        borderColor: Colors.buttonPrimary,
        height: 8,
        margin: 1,
        flex: 1,
    }
});
