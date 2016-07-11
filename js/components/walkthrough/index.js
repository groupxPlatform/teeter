
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import {replaceRoute} from '../../actions/route';

import {Container, Content, Text, Button, Icon, View } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

var deviceWidth = Dimensions.get('window').width;

class Walkthrough extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }
   
    render() {
        return (
            <Container>
                <Content theme={theme}>
                    <Swiper style={styles.wrapper}  loop={false} dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 50, height: 1, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />} activeDot={<View style={{backgroundColor: '#fff', width: 50, height: 1, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
                        
                        <View style={styles.slides}>
                            <Text style={styles.paginationText}>1 of 3</Text>
                            <Icon name="ios-paper-outline" style={{ fontSize: 60}} />
                            <Text style={styles.text}>Explore the latest news from your mobile device</Text>
                            <Button rounded style={{alignSelf: 'center',backgroundColor: 'rgba(0,0,0,0.2)'}} textStyle={{fontWeight: '900'}}  onPress={() => this.replaceRoute('home')}> Skip To App </Button>
                        </View>
        
                        <View style={styles.slides}>
                            <Text style={styles.paginationText}>2 of 3</Text>
                            <Icon name="ios-information-circle-outline" style={{ fontSize: 60}} />
                            <Text style={styles.text}>Lorem Ipsum industry's standard dummy text</Text>
                            <Button rounded style={{alignSelf: 'center',backgroundColor: 'rgba(0,0,0,0.2)'}} textStyle={{fontWeight: '900'}}  onPress={() => this.replaceRoute('home')}> Skip To App </Button>
                        </View>
        
                        <View style={styles.slides}>
                            <Text style={styles.paginationText}>3 of 3</Text>
                            <Icon name="ios-volume-up-outline" style={{ fontSize: 60}} />
                            <Text style={styles.text}>Lorem Ipsum is not simply random text</Text>
                            <Button rounded style={{alignSelf: 'center',backgroundColor: 'rgba(0,0,0,0.2)'}} textStyle={{fontWeight: '900'}}  onPress={() => this.replaceRoute('home')}> Continue To App </Button>
                        </View>
                    </Swiper>  
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Walkthrough);
