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
import { Loader, Button, ImageButton, Text } from '@components';
import { copy } from '@utils';
import DeviceInfo from 'react-native-device-info'

export default class Summary extends Component {
    constructor(props) {
        super(props);
        const {cardGame} = this.props.navigation.state.params


        this.state = ({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
            loaderVisible: false,
        })
    }

    componentDidMount() {
    }

    groupedCardByLevel(cardGame){
        var groupedCardByLevel = {"-1": [], "0": [], "1": [], "2": []}
        for (const card of cardGame.cards) {
            groupedCardByLevel[card.selectedLevel].push(card)
        }
        return groupedCardByLevel
    }

    onSelectedLevel(cardIndex, level){
        let cardGame = copy(this.state.cardGame)
        cardGame.cards[cardIndex].selectedLevel = level

        this.setState({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
        })
    }

    onStarSelected(cardIndex){
        let cardGame = copy(this.state.cardGame)
        let star = cardGame.cards[cardIndex].star 
        cardGame.cards[cardIndex].star = !star

        this.setState({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
        })        
    }

    renderCardItem({item, index}){
        var cardItemStyle = {
            marginRight: 8,
        }
        if(item.selectedLevel < 2){
            cardItemStyle.marginRight = 32            
        }
        var cardItem = 
            <View style={Styles.cardItemWithStar}>
                <View style={[Styles.cardItem, cardItemStyle]}>
                    <Image source={Images.threeDots} style={Styles.dragIcon}/>
                    <Text style={Styles.question}>{item.question}</Text>
                    {(item.selectedLevel != 0) &&
                        <ImageButton source={Images.levelNot} style={Styles.levelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 0)}/>
                    }
                    {(item.selectedLevel != 1) &&
                        <ImageButton source={Images.levelSomewhat} style={Styles.levelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 1)}/>
                    }
                    {(item.selectedLevel != 2) &&
                        <ImageButton source={Images.levelVery} style={Styles.levelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 2)}/>
                    }
                </View>
                {(item.selectedLevel == 2) &&
                    <ImageButton source={(item.star)?Images.star:Images.starEmpty} style={Styles.levelIcon} onPress={this.onStarSelected.bind(this, item.cardIndex)}/>                
                }
            </View>
        return cardItem
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>Your Priorities</Text>
                </View>
                <ScrollView>
                    {(this.state.groupedCardByLevel[2].length > 0) &&
                    <View style={Styles.levelContainer}>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>VERY IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[2]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[1].length > 0) &&
                    <View style={Styles.levelContainer}>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelSomewhat} style={Styles.levelIcon}/>
                            <Text bold>SOMEWHAT IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[1]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[0].length > 0) &&
                    <View style={Styles.levelContainer}>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelNot} style={Styles.levelIcon}/>
                            <Text bold>NOT IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[0]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[-1].length > 0) &&
                    <View style={Styles.levelContainer}>
                        <View style={Styles.importantBar}>
                            <Image source={Images.skip} style={Styles.levelIcon}/>
                            <Text bold>SKIPPED</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[-1]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light>EXIT</Button>
                    <Button dark>SHARE RESULTS</Button>
                </View>
            </View>
        );
    }
}