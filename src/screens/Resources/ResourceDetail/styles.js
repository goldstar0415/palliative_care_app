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
        fontSize: width/18,
        marginTop: height/10,
        marginBottom:height/30,
        color: Colors.textPrimary,
              
    },
    viewImage:{
        alignItems: 'center'
    },
    subtitle: {
        fontSize: width/30,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginTop:height/30,
        marginBottom:height/30,
        marginHorizontal:width/10
    },
    middleimage: {
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/1.5
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
    buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

};
