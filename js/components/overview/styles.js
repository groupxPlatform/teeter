
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
    Bg : {
        backgroundColor: primary,
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center',
    },
    overviewHeaderContainer: {
        padding: 20,
        paddingTop: 30,
        alignSelf: 'center',

    },
    overviewHeader: {
        fontSize: 22,
        fontWeight: '900',
        alignSelf: 'center'
    },
    overviewHead: {
        opacity: 0.9,
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
});