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
        height: null
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
        padding: 20,
        paddingTop: 30,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
    overviewHeader: {
        fontSize: 22,
        fontWeight: '900',
        alignSelf: 'center'
    },
    overviewHead: {
        opacity: 0.8,
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
    timelineContentHeading: {
        color: primary,
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    time: {
        color: '#666',
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    timeIcon: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 5,
        color: '#666'
    },
    timelineIcon: {
        alignSelf: 'center',
        color: '#999'
    },
    newsTypeView: {
        alignSelf: 'flex-end',
        flexDirection:'row'
    },
    newsTypeText: {
        color: '#666',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    timelineContent: {
        paddingLeft: 35,
        borderLeftWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 15
    },
    timelineView: {
        paddingLeft: 30,
        backgroundColor: '#fff' 
    },
});