
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View } from 'react-native';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

var primary = require('../../themes/variable').brandPrimary;

class Widgets extends Component {

    render() {
        return (
            <Container theme={theme} style={styles.bg} >
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                            <Icon name="ios-menu" />
                        </Button>
                    
                        <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                        
                        <Button transparent  style={{padding: 20,paddingBottom: 10}}>
                            <Icon name="ios-add" />
                        </Button>    
                    </Header>

                    <Content style={{backgroundColor: 'transparent'}} >
                        <View style={styles.overviewHeaderContainer}>
                            <Text style={styles.overviewHeader}>WIDGETS</Text>
                        </View>

                        <Image source={require('../../../images/Widgets/widget1.png')} style={styles.mainWidget}>
                            <Grid style={{flex: 10,flexDirection: 'row',padding: 20}}>
                                <Col>
                                    <Icon name="ios-cloud-outline" style={{fontSize: 40}} />
                                    <Text style={{fontWeight: '700'}}>Mostly Cloudy</Text>
                                    <Text style={{opacity: 0.7,fontWeight: '700'}}>New York</Text>
                                </Col>
                                <Col style={{alignItems: 'flex-end'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 120,lineHeight: 0,fontWeight: '700',marginTop: -20}}>76</Text>
                                        <Icon name="ios-radio-button-off" style={{fontSize: 16,marginTop: 5}} />
                                    </View>
                                </Col>
                            </Grid>

                            <Grid style={styles.weatherInfoContainer}>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>65'</Text>
                                    <Text style={styles.weatherTime}>8 AM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>86'</Text>
                                    <Text style={styles.weatherTime}>12 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>79'</Text>
                                    <Text style={styles.weatherTime}>4 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>62'</Text>
                                    <Text style={styles.weatherTime}>8 PM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>59'</Text>
                                    <Text style={styles.weatherTime}>12 AM</Text>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Text style={styles.weatherInfo}>52'</Text>
                                    <Text style={styles.weatherTime}>4 AM</Text>
                                </Col>
                            </Grid>
                        </Image>
                      
                        <Grid>
                            <Col>
                                <Image source={require('../../../images/Widgets/widget2.png')} style={styles.otherWidget}>
                                    <View style={{flex: 2,padding: 20,paddingTop: 10}}>
                                        <Text style={styles.widgetName}>KUMAR SANKET</Text>
                                        <Text style={[{color: 'blue'},styles.ratingPerc]}>+0.51%</Text>
                                        <Text style={styles.ratingNum}>5,055.55</Text>
                                        <Button rounded small style={styles.detailsBtn} textStyle={{color: primary,fontSize: 12,fontWeight: '900'}}>
                                            Details
                                        </Button>
                                    </View>
                                </Image>
                            </Col>
                            <Col>
                                <Image source={require('../../../images/Widgets/widget3.png')} style={styles.otherWidget}>
                                    <View style={{flex: 2,padding: 20,paddingTop: 10}}>
                                        <Text style={styles.widgetName}>KUMAR PRATIK</Text>
                                        <Text style={[{color: 'red'},styles.ratingPerc]}>-0.31%</Text>
                                        <Text style={styles.ratingNum}>4,567.00</Text>
                                        <Button rounded small style={styles.detailsBtn} textStyle={{color: primary,fontSize: 12,fontWeight: '900'}}>
                                            Details
                                        </Button>
                                    </View>
                                </Image>
                            </Col>
                        </Grid>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Widgets);
