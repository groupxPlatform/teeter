
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
    background: {
        flex: 1,
        width: null,
        height:null,
    },
    slides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary,
    },
    text: {
        fontSize: 20,
        lineHeight: 0,
        padding: 60,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    paginationText: {
        position: 'relative',
        top: -(deviceHeight/5),
        fontSize: 30,
        lineHeight: 0,
        fontWeight: 'bold',
    }
});