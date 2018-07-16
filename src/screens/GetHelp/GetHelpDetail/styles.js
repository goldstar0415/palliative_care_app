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
        flex : 1,
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        color: Colors.textPrimary,
    },
    viewBody:{
        marginHorizontal : width/9,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemTop: {
        paddingVertical : height/45,
        width : width/1.2,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginBottom: 8,
        marginTop : width/25,      
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBottom: {
        width : width/1.2,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,     
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1
    },
    logo: {
        width:width/1.2,
        height:height/2.5,
        marginBottom : 8
    },
    buttonView:{
        flexDirection : 'row',
    },
    button: {       
        width:width/3.6,
        height:height/18,
        backgroundColor : Colors.buttonPrimary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
    buttonText: {       
        paddingHorizontal:width/50,
        fontSize: width/30,
        marginTop : 2
    },
    buttonMiddle: {       
        width:width/3.6,
        height:height/18,
        backgroundColor : Colors.borderSecondary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
    listitemBottomView: {
        flexDirection : 'row',
        flex : 1,
    },
    buttonleft: {       
        width:width/2.6,
        height:height/18,
        backgroundColor : Colors.buttonPrimary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
    buttonright: {       
        width:width/2.2,
        height:height/18,
        backgroundColor : Colors.borderSecondary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
    contactText: {       
        paddingHorizontal:width/50,
        fontSize: width/50,
        marginTop : 2
    },
    contactView: {       
        flexDirection : 'row',
        flex:1,
        padding : 10
    },
    

};
