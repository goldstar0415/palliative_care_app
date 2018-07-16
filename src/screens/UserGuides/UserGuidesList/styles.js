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
        flex:1,
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        marginTop: height/10,
        color: Colors.textPrimary,
    },
    cardtitle: {
        fontSize: width/30,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        margin: 8,
        textAlign:'center'
    },
    subtitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
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
    firstrowItem: {
        width: width/3,
        height: width/4,
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
