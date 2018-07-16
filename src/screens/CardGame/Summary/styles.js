import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes} from '@theme';
import { Col } from 'native-base';

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

    importantBar: {
        flexDirection: 'row',     
        alignItems: 'center'   
    },

    cardItemWithStar: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
    },

    cardItem: {
        backgroundColor: Colors.backgroundSecondary,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
        paddingRight: 0,
        marginRight: 8,
    },

    question: {
        marginHorizontal: 8,
        flex: 1,
    },
    
    levelContainer: {
        marginBottom: 40,
    },

    levelIcon: {
        width: 24,
        height: 24,
        marginRight: 4,
        tintColor: Colors.textPrimary
    },

    dragIcon: {
        width: 8,
        height: 24,
        marginRight: 4,
        tintColor: Colors.textPrimary
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
