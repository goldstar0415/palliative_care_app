import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    TextInput,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';

import { getCardGame} from "@api";
import { Loader, Button, Text, ProgressBar } from '@components';
import DeviceInfo from 'react-native-device-info'

export default class SingleView extends Component {
    constructor(props) {
        super(props);
        const {cardIndex, cardGame} = this.props.navigation.state.params
        const cards = cardGame.cards
        this.state = ({
            cardIndex: cardIndex,
            cardGame: cardGame,
            cardTotalCount: cards.length,
            currentCard: cards[cardIndex],
        })
        // alert(JSON.stringify(cards[cardIndex]))
    }

    componentDidMount() {
    }

    onSkip(){
        if(this.state.cardIndex+1 >= this.state.cardTotalCount){
            this.onFinish()            
        }else{
            const {navigate} = this.props.navigation
            navigate("CDSingleView", {cardIndex: this.state.cardIndex+1, cardGame: this.state.cardGame})    
        }
    }

    onFinish(){
        const {navigate} = this.props.navigation
        navigate("CDSummary", {cardGame: this.state.cardGame})
    }

    onSelectedLevel(level){
        let cardGame = this.state.cardGame
        cardGame.cards[this.state.cardIndex].selectedLevel = level

        if(this.state.cardIndex+1 >= this.state.cardTotalCount){
            this.onFinish()            
        }else{
            const {navigate} = this.props.navigation
            navigate("CDSingleView", {cardIndex: this.state.cardIndex+1, cardGame: cardGame})
        }
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>How important is...</Text>
                </View>
                <View style={Styles.questionView}>
                    <Text medium center>{this.state.currentCard.question}</Text>
                </View>
                {this.state.currentCard.additional_info != "" &&
                    <Text center style={Styles.additionalInfo}>Addtional Info</Text>
                }
                <View style={Styles.levelBar}>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 0)}>
                        <Image source={Images.levelNot} style={Styles.levelIcon}/>
                        <Text bold>NOT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 1)}>
                        <Image source={Images.levelSomewhat} style={Styles.levelIcon}/>
                        <Text bold>SOMEWHAT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 2)}>
                        <Image source={Images.levelVery} style={Styles.levelIcon}/>
                        <Text bold>VERY</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.progress}>
                    <ProgressBar total={this.state.cardTotalCount} progress={this.state.cardIndex+1} style={Styles.progressBar}/>
                    <Text small center>Card {this.state.cardIndex+1} of {this.state.cardTotalCount}</Text>
                </View>
                <View style={Styles.buttonBar}>
                    <Button light onPress={()=>navigate("CDListView", {cardGame: this.state.cardGame})}>LIST VIEW</Button>
                    <Button dark onPress={this.onSkip.bind(this)}>SKIP</Button>
                    <Button dark onPress={this.onFinish.bind(this)}>FINISH</Button>
                </View>
            </View>
        );
    }
}