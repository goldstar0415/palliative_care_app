import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const deviceHeight = Dimensions.get("window").height;

export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    introContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        margin: 8,
    },

    subtitle: {
        textAlign: 'center',
        margin: 8,
    },

    icon: {
        height: 200,
    },

    intro: {
        margin: 10,
    },

    buttonBar: {
        flexDirection: 'row',
        margin: 16,
    },
};
