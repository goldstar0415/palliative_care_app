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
import Button from '@button'
import Text from '@text'
import ProgressBar from '@progressbar'
import Choices from "@choices";
import ManyChoices from "@manychoices";

import { getCardGame} from "@api";
import { Loader } from '@components';
import { copy } from '@utils';
import DeviceInfo from 'react-native-device-info'

export default class ListView extends Component {
    constructor(props) {
        super(props);
        const {cardGame} = this.props.navigation.state.params
        this.state = ({
            cardGame: cardGame,
        })
    }

    componentDidMount() {
    }

    onSelectedLevel(cardIndex, level){
        let cardGame = copy(this.state.cardGame)
        cardGame.cards[cardIndex].selectedLevel = level

        this.setState({
            cardGame: cardGame,            
        })
    }

    renderCardItem({item, index}){
        let selectedLevel = item.selectedLevel
        var levelItemStyles = [
            {marginLeft: 16},
            {marginLeft: 16},
            {marginLeft: 16},
        ]
        if(selectedLevel >= 0) {
            levelItemStyles[selectedLevel].marginLeft = 0
            levelItemStyles[selectedLevel].width = 166
        }
        var cardItem = 
            <View style={Styles.cardItem}>
                <View style={Styles.question}>
                    <View style={Styles.questionView}>
                        <Text medium center>{item.question}</Text>
                    </View>
                    <View style={Styles.levelBar}>
                        <TouchableOpacity style={[Styles.levelItem, levelItemStyles[0]]} onPress={this.onSelectedLevel.bind(this, index, 0)}>
                            <Image source={Images.levelNot} style={Styles.levelIcon}/>
                            <Text bold>NOT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.levelItem, levelItemStyles[1]]} onPress={this.onSelectedLevel.bind(this, index, 1)}>
                            <Image source={Images.levelSomewhat} style={Styles.levelIcon}/>
                            <Text bold>SOMEWHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.levelItem, levelItemStyles[2]]} onPress={this.onSelectedLevel.bind(this, index, 2)}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>VERY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {item.additional_info != "" &&
                    <Text center style={Styles.additionalInfo}>Addtional Info</Text>
                }
            </View>
        return cardItem
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>How important is...</Text>
                </View>
                <FlatList
                    data = {this.state.cardGame.cards}
                    renderItem = {this.renderCardItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                />
                <View style={Styles.buttonBar}>
                    <Button light onPress={()=>{navigate("CDSingleView", {cardIndex: 0, cardGame: this.state.cardGame})}}>SINGLE VIEW</Button>
                    <Button dark onPress={()=>{navigate("CDSummary", {cardGame: this.state.cardGame})}}>FINISH</Button>
                </View>
            </View>
        );
    }
}