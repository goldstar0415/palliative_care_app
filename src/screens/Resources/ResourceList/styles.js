import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width,height } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },
    scroll:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollcontainer:{
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        marginTop: height/18,
        color: Colors.textPrimary,
        margin: 8,
    },
    txttitle: {
        fontSize: width/30,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        margin: 8,
    },
    subtitle: {
        fontSize: width/30,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/25,
    },
    buttomBar: {
        flexDirection: 'row',
    },
    item: {
        width: width/3,
        height: width/8,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,    
        justifyContent: 'center',
        alignItems: 'center',
    },

};
