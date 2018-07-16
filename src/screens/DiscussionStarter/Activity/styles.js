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

    pregressBar: {
        marginHorizontal: 100,
        marginVertical: 30,
    },

    title: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    icon: {
        height: 200,
    },

    questionItem: {
        marginTop: 10,
        marginBottom: 30,
    },

    questionTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
    },

    textArea: {
        backgroundColor: Colors.backgroundSecondary,
        height: 120,
        color: Colors.textPrimary,
        fontSize: FontSizes.smallMedium,
        padding: 8,
    },

    buttonBar: {
        flexDirection: 'row',
        marginVertical: 16,
        justifyContent: 'space-between',
    },

};
