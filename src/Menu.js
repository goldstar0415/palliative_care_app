import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet} from 'react-native';

// StatusBar.setHidden(true);
export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}> Dying To Talk </Text>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },

    logoText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})