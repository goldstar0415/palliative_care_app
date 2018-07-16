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

    cardItem: {
        marginBottom: 30,
    },

    question: {
        flexDirection: 'row',
        marginBottom: 15,
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: 144,
        justifyContent: 'center',
        flex: 1,
        padding: 8,
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginBottom: 15,
        padding: 8,
    },

    levelBar: {
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        flexDirection: 'row',
        marginLeft: 16,
        justifyContent: 'center',
        padding: 8,
        width: 150,
    },

    levelIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
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
        marginVertical: 15,
    },

};
