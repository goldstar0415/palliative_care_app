/**
 * @providesModule @choices
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';

import {Colors} from '@theme';
import Button from '@button'
import Text from '@text'
import Choice from '@choice'

export default class Choices extends Component {
    constructor(props) {
        super(props);
        var {data, selectedIndex} = props

        this.state = {
            choiceData: this.getChoiceData(data, selectedIndex)
        }
    }

    getChoiceData(data, selectedIndex){

        var choiceData = data.map((text, index) => {
            var odd = index % 2 == 0
            if(selectedIndex < 0){
                return {
                    index: index,
                    text: text,
                    selected: false,
                    disabled: false,
                    odd: odd,
                }        
            }else{
                if(selectedIndex == index){
                    return {
                        index: index,
                        text: text,
                        selected: true,
                        disabled: false,
                        odd: odd,
                    }
                }else{
                    return {
                        index: index,
                        text: text,
                        selected: false,
                        disabled: true,
                        odd: odd,
                    }                        
                }
            }
        })

        return choiceData
    }

    onItemPressed(choiceIndex){
        var choiceItem = this.state.choiceData[choiceIndex]
        // alert(JSON.stringify(choiceItem))
        var selectedIndex;
        if(choiceItem.selected) selectedIndex = -1;
        else                    selectedIndex = choiceIndex
        
        this.setState({
            choiceData: this.getChoiceData(this.props.data, selectedIndex)
        })    

        //react bug Not render until scroll
        this.flatList.scrollToOffset({offset: -1})
        this.flatList.scrollToOffset({offset: 1})

        this.props.onChangedAnswer(this.props.questionIndex, selectedIndex)
    }

    render() {
        return (
            <FlatList
                ref = {ref=>this.flatList = ref}
                scrollEnabled={false}
                data = {this.state.choiceData}
                renderItem = {({item, index})=>
                    <Choice {...item} onPress={this.onItemPressed.bind(this)}/>
                }
                keyExtractor = {(item, index) => index.toString()}
                />
        )
    }
}

