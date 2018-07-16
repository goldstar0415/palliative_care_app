/**
 * @providesModule @OnBoardingstyles
 */

import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
    orientation
} from 'react-native';

//import {Colors} from '../../theme'; // use for theme color
import {Colors} from '@theme'
const { width, height } = Dimensions.get('window'); // Detect screen width and height
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';// use for responsive screen UI

export default {
  slide: {
    flex: 1,              
    alignItems: 'center',  
  },
  scrollcontainer:{
    marginBottom:height/15,
  },
  logo:{
    marginBottom:height/30,
    marginTop:height/10,
    height:height/6,
    width:width/3,
  },
  middleimage:{
    height:height/3,
    width:width/1.5,
  },
  descText: {
    marginHorizontal: width/10,
    marginVertical:height/25,
    textAlign:'center'
  },
  container: {
    flex: 1, 
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.25)',
    width: width/8,
    height: 5,
    marginLeft: 2,
    marginRight: 2,
    width: width/8,
  },
  activeDot: {
    backgroundColor: 'gray',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonPrev: {         
    width:width/4,
    height:height/18,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonNext: {       
    width:width/4,
    height:height/18,
    alignItems:'center',
    justifyContent:'center',
  },
};
