
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import {replaceRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Thumbnail} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import { Grid, Col, Row } from "react-native-easy-grid";

import theme from '../../themes/base-theme';
import styles from './styles';

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state= {
            date: new Date(),
        };
    }

    onDateChange (date) {
        this.setState({ date: date });
    }
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }
    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={this.props.openDrawer}  style={{padding: 20,paddingTop: 33}}>
                        <Icon name="ios-menu" />
                    </Button>
                    
                    <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                    
                    <Button transparent  style={{padding: 20,paddingBottom: 10}}>
                        <Icon name="ios-search" />
                    </Button>    
                </Header>

                <Content style={styles.bg}>
                    <CalendarPicker
                        selectedDate={this.state.date}
                        onDateChange={this.onDateChange.bind(this)} />

                    <View style={{backgroundColor: '#fff'}}>
                        <TouchableOpacity  style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                            <Thumbnail square source={require('../../../images/NewsIcons/1.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Lorem Ipsum is simply dummy text of the printing
                                </Text>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsLink}>CDC</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={styles.newsTypeView}>
                                            <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                            <Thumbnail square source={require('../../../images/NewsIcons/3.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Text numberOfLines={2} style={styles.newsHeader}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </Text>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsLink}>SPACE.com</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={styles.newsTypeView}>
                                            <Text style={styles.newsTypeText}>SCIENCE</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.replaceRoute('home')}>
                            <Thumbnail square source={require('../../../images/NewsIcons/4.jpg')} style={styles.newsImage} />
                            <View style={styles.newsContent}>
                                <Text numberOfLines={2} style={styles.newsHeader}>
                                    It has survived not only five centuries
                                </Text>
                                <Grid style={{marginTop: 25}}>
                                    <Col>
                                        <TouchableOpacity>
                                            <Text style={styles.newsLink}>SKY.com</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={styles.newsTypeView}>
                                            <Text style={styles.newsTypeText}>WORLD</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
    }
}

export default connect(null, bindAction)(Calendar);