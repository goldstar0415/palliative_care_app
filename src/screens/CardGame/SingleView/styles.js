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

    title: {
        marginVertical: 30,
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: 300,
        marginHorizontal: 8,
        marginVertical: 15,
        justifyContent: 'center'
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: 8,
        marginBottom: 15,
        padding: 8,
    },

    levelBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: 8,
        alignItems: 'center',
        padding: 8,
        flex: 1,
    },

    levelIcon: {
        width: 32,
        height: 32,
        marginVertical: 4,
    },

    progress: {
        marginVertical: 30,
    },

    progressBar: {
        marginHorizontal: 50,
        marginVertical: 10,
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

};
