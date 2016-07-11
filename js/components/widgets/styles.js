
'use strict';

var React = require('react-native');
var primary = require('../../themes/variable').brandPrimary;
var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    bg: {
      backgroundColor: primary,
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center'
    },
    overviewHeaderContainer: {
        padding: 30,
        paddingTop: 40,
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    overviewHeader: {
        fontSize: 22,
        fontWeight: '700',
        alignSelf: 'center'
    },
    overviewHead: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14,
        fontWeight: 'bold'
    },
    overviewInfoHeader: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: '900'
    },
    overviewInfoPerc: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900'
    },
    mainWidget: {
        height: (deviceHeight/2) - 70,
        width: null
    },
    otherWidget: {
        height: (deviceHeight/3) + 20,
        width: deviceWidth/2
    },
    weatherInfo: {
        fontWeight: '900',
        fontSize: 18
    },
    weatherTime: {
        fontSize: 10,
        fontWeight: '700',
        opacity: 0.8,
    },
    weatherInfoContainer: {
        flex: 9,
        padding: 20,
        marginTop: 100,
        alignItems: 'center'
    },
    detailsBtn: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'center',
        marginTop: 80
    },
    ratingPerc: {
        fontSize: 32,
        fontWeight: '800',
        lineHeight: 0,
        paddingTop: 10,
        paddingBottom:10
    },
    ratingNum: {
        color: '#ccc',
        fontWeight: '800',
        lineHeight: 0
    },
    widgetName: {
        color: '#222',
        fontWeight: '700',
        fontSize: 12
    },
});

