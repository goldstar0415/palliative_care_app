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
    },
    scrollcontainer:{
        flex : 1,
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        marginTop: height/10,
        color: Colors.textPrimary, 
        textAlign: 'center',      
    },
    subtitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
    },
    viewImage:{
        alignItems: 'center',
        marginVertical: height/30,
    },
    middleimage: {
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/1.5
    },
    viewBody:{
        marginHorizontal : width/9,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    item: {
        marginVertical: height/40,
    },
    itemTitle: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },
    txtQuestion: {
        fontSize: width/30,
    },
    txtAnswer: {
        fontSize: width/30,
        padding : 16, 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },
    faqTitle: {
        marginHorizontal : width/10,
    },
    flatList: {
        marginHorizontal : width/10,
    },

};
