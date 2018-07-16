import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';
import { getResources } from "@api";
var BASE_URL = 'https://pca.techequipt.com.au'

export default class ResourceDetail extends Component {
    constructor(props) {
        super(props);
        const {resourceIndex} = this.props.navigation.state.params
        this.state = ({
            resourceIndex: resourceIndex,
            title: '',
            subtitle: '',
            link: '',
            image: '',
            loaderVisible: true
        })
    }

    async componentDidMount() {
        const ds = await getResources(true)
        const resources = ds.resources
        const resource = resources[this.state.resourceIndex]
        
        this.setState({
            title: resource.title,
            subtitle: resource.information_text,
            link: resource.link,
            image: BASE_URL + resource.image.url,
            loaderVisible: false
        }) 
    }

    render() {   
        return (
            <View style={Styles.container}>
            <View style={Styles.scrollcontainer}> 
                <Loader loading={this.state.loaderVisible}/>
                <ScrollView contentContainerStyle={Styles.scroll}> 
                    <Text bold style={Styles.title}>{this.state.title}</Text>
                    <View style={Styles.viewImage}>
                        <Image style={Styles.middleimage} source={{uri: this.state.image}}/>
                    </View>                
                    <Text style={Styles.subtitle}>
                        {this.state.subtitle}
                    </Text>
                    <View style={Styles.buttonContainer}>
                        <Button light onPress={ ()=> this.props.navigation.goBack() }>GO BACK</Button>
                      <Button dark onPress={ ()=> Linking.openURL(this.state.link) } >VIEW</Button>
                    </View>
                </ScrollView> 
                </View>
                <Footer />
            </View>
        );
    }
}