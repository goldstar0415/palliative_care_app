/**
 * @providesModule router
 */

import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');

import {Colors} from '@theme'
import { Button, Icon, Text} from 'native-base';
import Menu from "./Menu";
import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import {DSIntro, ActivityList, Activity, UpNext, Complete} from "./screens/DiscussionStarter";
import {CDIntro, CDSingleView, CDListView, CDSummary} from "./screens/CardGame";
import {ResourceList, ResourceDetail} from "./screens/Resources";
import {UserGuidesList,UserGuidesDetail} from "./screens/UserGuides";
import {GetHelpList, GetHelpDetail} from "./screens/GetHelp";


const MenuIcon = ({ navigate }) => {
    return (
        <Button 
            iconLeft 
            style={{backgroundColor: Colors.buttonPrimary, margin: 8}}
            onPress={() => navigate('DrawerOpen')}>
            <Icon name='menu' />
            <Text>MENU</Text>
        </Button>
    );
}

const BackIcon = ({ navigate, go }) => {
    return (
        <Icon name='arrow-back' />
    );
}

const HomeIcon = ({ navigate, goBack }) => {
    return (
        <Button 
            iconLeft 
            style={{backgroundColor: Colors.buttonPrimary, margin: 8}}
            onPress={() => goBack()}>
            <Icon name='home' />
            <Text>HOME</Text>
        </Button>
    );
}

export const DiscussionStarterStack = StackNavigator({
    DSIntro: {screen: DSIntro},
    ActivityList: {screen: ActivityList},
    Activity: {screen: Activity},
    UpNext: {screen: UpNext},
    Complete: {screen: Complete},
}, {
    headerMode: 'none',
});

export const CardGameStack = StackNavigator({
    CDIntro: {screen: CDIntro},
    CDSingleView: {screen: CDSingleView},
    CDListView: {screen: CDListView},
    CDSummary: {screen: CDSummary},
}, {
    headerMode: 'none',
});

export const ResourcesStack = StackNavigator({
    ResourceList: {screen: ResourceList},
    ResourceDetail: {screen: ResourceDetail},
}, {
    headerMode: 'none',
});

export const UserGuidesStack = StackNavigator({
    UserGuidesList: {screen: UserGuidesList},
    UserGuidesDetail: {screen: UserGuidesDetail},
}, {
    headerMode: 'none',
});

export const GetHelpStack = StackNavigator({
    GetHelpList: {screen: GetHelpList},
    GetHelpDetail: {screen: GetHelpDetail},
}, {
    headerMode: 'none',
});

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
        }),
    },
    DiscussionStarter: {
        screen: DiscussionStarterStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    CardGame: {
        screen: CardGameStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    Resources: {
        screen: ResourcesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    UserGuides: {
        screen: UserGuidesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    GetHelp: {
        screen: GetHelpStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
});

export const DrawerStack = DrawerNavigator(
    {
        homeStack: {
            screen: HomeStack,
        }
    },
    {
        drawerWidth: width / 2.5,
        drawerPosition: 'right',
        contentComponent: props => <Menu {...props} />
    }
);

export const PrimaryNav = StackNavigator({
    SplashScreen: { screen: Splash },
    OnBoardingScreen: { screen: OnBoarding },
    DrawerStack: { screen: DrawerStack },
    
}, {
    headerMode: 'none',
})