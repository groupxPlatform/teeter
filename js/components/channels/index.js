
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

class Channels extends Component {

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                    
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent  style={{padding: 20}}>
                            <Icon name="ios-search" />
                        </Button>    
                    </Header>

                    <Content>
                        <View style={styles.bgHead}>
                            <Grid>
                                <Col>
                                    <Button rounded block  style={styles.channelBtn1}  textStyle={{fontSize: 12,fontWeight: '900',marginTop: -5}}>
                                        Following
                                    </Button>
                                    
                                </Col>
                                <Col>
                                    <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',marginTop: -5}}>
                                        Popular
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent block  textStyle={{fontSize: 12,fontWeight: '900',marginTop: -5}}>
                                        Explore
                                    </Button>
                                </Col>
                            </Grid>
                        </View>
                        <View>
                            <Grid>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>FASHION</Text> 
                                            </Image> 
                                        </TouchableOpacity> 
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/2.png')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>SCIENCE</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/8.jpg')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>AUTO</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>TECHNOLOGY</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/6.jpg')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>FINANCES</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.pushNewRoute('channel')}>
                                            <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                                                <Text style={styles.channelImgText}>ENVIRONMENT</Text>
                                            </Image>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
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
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Channels);