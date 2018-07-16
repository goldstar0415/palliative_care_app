import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes} from '@theme';

const { width } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingVertical: 60,
        paddingHorizontal: 100,
    },

    flatList: {
        marginVertical: 30,
    },

    item: {
        marginVertical: 10, 
    },

    itemTitle: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },

    itemPrecomment: {
        padding : 16, 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },

    buttonBar: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal : 50, 
        justifyContent: 'center',
    },

    checkIcon: {
        width: 32,
        height: 32,
        marginRight: 8,
    }
};
