
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {replaceRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';
var primary = require('../../themes/variable').brandPrimary;

class Channel extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={theme} >
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
                        <View>
                            <Image source={require('../../../images/NewsIcons/2.png')} style={styles.newsPoster}>
                                <View>
                                    <Text style={styles.chanelHeader}>SCIENCE CHANNEL</Text>
                                    <Button rounded  style={styles.followBtn}  textStyle={{color: primary,fontSize: 13,fontWeight: '900',marginTop: -5}}>
                                        Following
                                    </Button>
                                    <TouchableOpacity style={{padding: 0}}>
                                        <Text style={styles.noOfFollowers}>234K Followers</Text>
                                    </TouchableOpacity>
                                </View>
                            </Image>
                        </View>

                        <View  foregroundColor={"white"} style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>May 24,2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SPACE.com</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Apr 17,2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>
                                        It has survived not only five centuries
                                    </Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>CNN</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Feb 3,2016</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('story')}>
                                <View style={styles.newsContentWrap}>
                                    <Text numberOfLines={2} style={styles.newsHeader}>It has survived not only five centuries</Text>
                                    <Grid style={styles.newsContent}>
                                        <Col style={{flexDirection:'row'}}>
                                            <TouchableOpacity>
                                                <Text style={styles.newsLink}>SKY.com</Text>
                                            </TouchableOpacity>
                                            <Icon name="ios-time-outline" style={styles.timeIcon} />
                                            <Text style={styles.newsLink}>Dec 17,2015</Text>
                                        </Col>
                                    </Grid>
                                </View>
                            </TouchableOpacity>
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
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Channel);
