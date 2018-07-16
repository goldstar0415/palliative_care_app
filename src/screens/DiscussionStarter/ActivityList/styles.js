import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    introContainer: {
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        margin: 8,
    },

    subtitle: {
        fontSize: 24,
        color: Colors.textPrimary,
        textAlign: 'center',
        margin: 8,
    },

    icon: {
        height: 200,
    },

    intro: {
        fontSize: 20,
        color: Colors.textPrimary,
        textAlign: 'center',
        margin: 10,
    },

    buttonBar: {
        flexDirection: 'row',
        margin: 16,
    },

    item: {
        width: width/3,
        height: width/3,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,        
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 24,
        flex: 1,
        width: 200
    },

};
