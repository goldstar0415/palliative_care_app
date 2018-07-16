import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
} from 'react-native';

import {Colors} from '@theme';
import Styles from './styles';
import Text from '@text'
import { Loader, Button } from '@components';

import { getCardGame } from "@api";

export default class intro extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            cardGame: {},
            loaderVisible: false,
        })

    }
        
    async componentDidMount() {
        this.setState({
            loaderVisible: true,
        })

        let json = await getCardGame()
        const firstCardGame = json[0]

        var cardIndex = 0
        for (var card of firstCardGame.cards) {
            card.selectedLevel = -1
            card.cardIndex = cardIndex ++
        }

        this.setState({
            loaderVisible: false,
            cardGame: firstCardGame,
        })
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.introContainer}>
                    <Text mediumLarge bold style={Styles.title}>Card Game</Text>
                    <Text medium bold style={Styles.subtitle}>
                        {this.state.cardGame.title}
                    </Text>
                    <Image style={Styles.icon}/>
                    <Text style={Styles.intro}>
                        {this.state.cardGame.description}
                    </Text>
                    <View style={Styles.buttonBar}>
                        <Button dark 
                            onPress={()=>{navigate("CDSingleView", {cardIndex: 0, cardGame: this.state.cardGame})}}>{"  PLAY  "}</Button>
                    </View>
                </View>
            </View>
        );
    }
}