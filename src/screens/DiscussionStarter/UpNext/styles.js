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

    current: {
        marginVertical: 50, 
    },

    next: {
        marginVertical: 50, 
    },

    currentTitle: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },

    currentPrecomment: {
        padding : 16, 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },

    nextTitle: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    nextPrecomment: {
        paddingHorizontal : 50, 
        borderWidth: 1,
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
