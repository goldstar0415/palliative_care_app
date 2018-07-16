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
        color: Colors.textPrimary,
    },
    subtitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
    },
    item: {
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
    listitem: {
        width : width/1.2,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,      
        justifyContent: 'center',
    },
    listitemTopView: {
        flexDirection : 'row',
        flex : 1,
        padding : 16,
    },
    listitemBottomView: {
        flexDirection : 'row',
        flex : 1,
    },
    listTitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        marginTop:2,
    },
    listDesc: {
        fontSize: width/30,
        color: Colors.textPrimary,
        marginTop:2,
    },
    listTitleView: {
        marginLeft:width/25,
        flex:1
    },
    listLogo: {
        width:width/2.5,
        height:height/5
    },
    listButtonView:{
        flexDirection : 'row',
    },
    listButton: {       
        width:width/3.6,
        height:height/18,
        backgroundColor : Colors.buttonPrimary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
    listButtonText: {       
        paddingHorizontal:width/50,
        fontSize: width/30,
        marginTop : 2
    },
    listButtonMiddle: {       
        width:width/3.6,
        height:height/18,
        backgroundColor : Colors.borderSecondary,
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
    },
};
