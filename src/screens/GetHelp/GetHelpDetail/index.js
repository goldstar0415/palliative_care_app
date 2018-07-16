import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    Share,
    TouchableOpacity,
    Dimensions,
    WebView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';
import EmailModal from '../../DiscussionStarter/Complete/modals/Email'
import EmailSentModal from '../../DiscussionStarter/Complete/modals/EmailSent'

import { getGetHelp, API_HTML_ROOT} from "@api";
import HTMLView from 'react-native-htmlview';
import Communications from 'react-native-communications';
const { width,height } = Dimensions.get('window');

function renderNode(node, index, siblings, parent, defaultRenderer) {
    if(Platform.OS === 'ios')
    {
      if (node.name == 'iframe') {
        var atribute = node.attribs;
        var iframeHtml = `<iframe width=\"${width}\" height=\"${height/2}\" src=\"${atribute.src}" ></iframe>`;
        return (
          <View key={index} style={{width: width/4, height: height/8}}>
            <WebView source={{html: iframeHtml}} />
          </View>
        );
      }
    }
    if (node.name == 'img') {
        var atribute = node.attribs;
        var source = API_HTML_ROOT + atribute.src;
        var imgHtml = `<img src=\"${source}\" width=\"${width/1.5}\" height=\"${height/2.7}\" >`;
        return (
            <HTMLView
                value={imgHtml}
            />
        );
    }

    if(Platform.OS === 'ios')
    {
      if (node.name == 'a') {
        var atribute = node.attribs;
        var source = API_HTML_ROOT + atribute.href;
        var aHtml = `<a href=\"${source}\" >${node.children[0].data}</a>`;
       return (
            <HTMLView
                value={aHtml}
            />
      );
      }
    }
}

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const {gethelpIndexes} = this.props.navigation.state.params
        this._share=this._share.bind(this);
        this._showResult=this._showResult.bind(this);
        this.state = ({
            gethelpIndexes: gethelpIndexes,
            title : '',
            logo : '',
            description : '',
            email : '',
            website : '',
            phonenumber : '',
            loaderVisible: false,
            modalVisible: {
                email: false,
                emailSent: false,
            },
        })
    }

    async componentDidMount() {
        const ds = await getGetHelp(true)
        const gethepls = ds[0].services
        const gethelp = gethepls[this.state.gethelpIndexes]

       
        this.setState({
            title : gethelp.title,
            logo : gethelp.logo,
            description : gethelp.description,
            email : gethelp.email_address,
            website : gethelp.website,
            phonenumber : gethelp.phone_number,
            loaderVisible: false
        }) 
    }

    _showResult(result){
        if(result.action == "sharedAction")
        {
            alert("Your content has been share successfully.");
        }
        else
        {
            alert("You have cancelled sharing.");
        } 
    }

    _share(){
        Share.share({
            message : 'Dying To Talk',
            url : this.state.website
        }).then(this._showResult.bind(this));
    }

    onShareEmail() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })        
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: false,
                    email: true,
                    emailSent: false,
                }
            })                        
        }, 200)
    }

    onSendEmail(name, email){
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: false,
                    email: false,
                    emailSent: true,
                }
            })                        
        }, 1000)
    }

    onShareCancel() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })
    }

    render() {   
        return (
            <View style={Styles.container}>
            <View style={Styles.scrollcontainer}> 
               <ScrollView contentContainerStyle={Styles.scroll}> 

                    <Loader loading={this.state.loaderVisible}/>
                    <View style={Styles.itemTop}>
                        <Text bold style={Styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={Styles.itemBottom}>
                       
                            {this.state.logo == null ?
                                <Image style={Styles.logo} source={require('../../../../assets/images/default_appLogo.png')} resizeMode="stretch"/>
                                :
                                <Image style={Styles.logo} source={{uri:  API_HTML_ROOT + this.state.logo.url}} resizeMode="stretch"/>
                            }
                           
                        <View style={Styles.viewBody}>
                            <HTMLView
                                value={this.state.description}
                                renderNode={renderNode}
                            />
                            
                        </View>

                        
                        {this.state.email == '' 
                            ?
                            <View style={{flex:1}}>
                                <View style={{flexDirection : 'row',padding:10}}>
                 
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.phonenumber}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.website}</Text>
                                    </View>

                                </View>
                                <View style={Styles.listitemBottomView}>
                                    <TouchableOpacity style={Styles.buttonleft} onPress={() => Communications.phonecall(this.state.phonenumber, true)}>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                            <Text style={Styles.buttonText}>CALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.buttonright} onPress={ ()=> Linking.openURL(this.state.website) }>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                            <Text style={Styles.buttonText}>WEBSITE</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :

                            <View style={{flex:1}}>
                                <View style={{flexDirection : 'row',padding:10}}>
                 
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.phonenumber}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.website}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_email.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.email}</Text>
                                    </View>

                                </View>
                                <View style={Styles.listitemBottomView}>
                                    <TouchableOpacity style={Styles.button} onPress={() => Communications.phonecall(this.state.phonenumber,true)}>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                            <Text style={Styles.buttonText}>CALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.buttonMiddle} onPress={ ()=> Linking.openURL(this.state.website) }>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                            <Text style={Styles.buttonText}>WEBSITE</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.button} onPress={this.onShareEmail.bind(this)}>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_email.png')}/></View>
                                            <Text style={Styles.buttonText}>EMAIL</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        
                    </View>
                   
                    <View style={Styles.itemBottom}>
                        <View style={Styles.buttonContainer}>
                            <Button light onPress={ ()=> this.props.navigation.goBack() }>GO BACK</Button>
                            <View style={{flex:1}}/>
                            <Button dark  onPress={this._share}>SHARE</Button>
                        </View>
                    </View>
                    <EmailModal 
                        visible={this.state.modalVisible.email} 
                        onSend={this.onSendEmail.bind(this)}
                        onCancel={this.onShareCancel.bind(this)}
                        />
                    <EmailSentModal 
                        visible={this.state.modalVisible.emailSent} 
                        onCancel={this.onShareCancel.bind(this)}
                        />
                </ScrollView> 
                </View>
                <Footer />
            </View>
        );
    }
}