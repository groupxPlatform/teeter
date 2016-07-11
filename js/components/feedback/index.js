
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, Platform, DeviceEventEmitter, Dimensions } from 'react-native';
import {resetRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, InputGroup, Input} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            offset: {
               x:0,
               y:0
        }
    };
    
    this.constructor.childContextTypes = {
            theme: React.PropTypes.object,
        }
    }
   
    componentWillMount () {
        DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
        DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
    }
   
    keyboardWillShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({offset :{y: 80}});
    }
   
    keyboardWillHide (e) {
        this.setState({offset :{y: 0}});
    }
   
    resetRoute(route) {
        this.props.resetRoute(route);
    }

    render() {
        return (
            <Container theme={theme} contentOffset={this.state.offset} scrollEnabled={false} >
                <Image source={require('../../../images/BG-signUp.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                    
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent style={{padding: 20}}  onPress={() => this.resetRoute('login')}>
                            <Icon name="ios-power" />
                        </Button>    
                    </Header>

                    <Content>
                        <View style={{paddingTop: 30,paddingLeft: 50,paddingRight: 50}}>
                            <Grid>
                                <Col>
                                    <Button transparent style={styles.roundedButton}>
                                        <Icon name="ios-call-outline" style={{fontSize: 30}} />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent style={styles.roundedCustomButton}>
                                        <Icon name="ios-mail-outline" style={{fontSize: 28,color: primary}} />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent style={styles.roundedButton}>
                                        <Icon name="ios-pin-outline" style={{fontSize: 28}} />
                                    </Button>
                                </Col>
                            </Grid>   
                        </View>
                        <View style={styles.feedbackHeaderContainer}>
                            <Text style={styles.feedbackHeader}>SEND FEEDBACK</Text>
                            <Text note  style={styles.feedbackHead}>Your feedback is very important to us.</Text>
                        </View>
                        <View style={styles.feedbackContainer}>
                            <InputGroup borderType="rounded" style={[Platform.OS === 'android' ? styles.inputGrp : styles.iosInputGrp, {borderWidth: 0, paddingLeft: 25}]}>
                                <Icon name="ios-person-outline" />
                                <Input placeholder="Username"  style={styles.input}/>
                            </InputGroup>
                            <InputGroup borderType="rounded" style={[Platform.OS === 'android' ? styles.inputGrp : styles.iosInputGrp, {borderWidth: 0, paddingLeft: 25}]}>
                                <Icon name="ios-mail-outline" />
                                <Input placeholder="Email"  style={styles.input}/>
                            </InputGroup>
                            <Grid style={{borderBottomWidth: 1,borderBottomColor: 'rgba(255,255,255,0.2)'}}>
                                <Col style={{alignSelf: 'flex-start'}}>
                                    <Input placeholder="Write something..."  style={styles.input}/>
                                </Col>
                                <Col style={{alignSelf: 'flex-end'}}>
                                    <Icon name="ios-arrow-forward"  style={{alignSelf: 'flex-end'}} />
                                </Col>
                            </Grid>
                        </View>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        resetRoute:(route)=>dispatch(resetRoute(route))
    }
}

export default connect(null, bindAction)(Feedback);