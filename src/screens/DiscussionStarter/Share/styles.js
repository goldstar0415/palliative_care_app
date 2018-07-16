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
        backgroundColor: Colors.backgroundModal,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        backgroundColor: Colors.backgroundPrimary,
        width: 300,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

    },

    title: {
        marginBottom: 10,
    },

    buttons: {

    }

};
