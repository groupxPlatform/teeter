
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
    profileInfo: {
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },
    logoHeader: {
        width: 20,
        height: 28,
        alignSelf: 'center'
    },
    newsImage: {
        width: 100, 
        height: 130
    },
    newsContent: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    newsHeader: {
        color: '#222',
        fontWeight: '500',
        fontSize: 14
    },
    newsCommentContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        borderLeftWidth: 2,
        borderLeftColor: primary
    },
    newsComment: {
        color: primary,
        fontWeight: '500',
        fontSize: 14
    },
    newsLink: {
        color: '#666',
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end'
    },
    newsTypeText: {
        color: '#666',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    newsPoster: {
        height: (deviceHeight/2) - 30,
        width: null,
        position: 'relative'
    },
    newsPosterHeader: {
        fontWeight: '900'
    },
    newsPosterContent: {
        marginTop: (deviceHeight/3),
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    newsPosterLink: {
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    newsPosterTypeView: {
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        alignSelf: 'flex-end'
    },
    newsPosterTypeText: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    timeIcon: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 5,
        color: '#666'
    },
    overviewHeaderContainer: {
        padding: 0,
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
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14,
        fontWeight: 'bold'
    },
    nightButton: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius:30,
        width: 60,
        height:60
    },
    dayButton: {
        backgroundColor: '#fff',
        borderRadius:30,
        width: 60,
        height:60
    },
    space: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    modal: {
        flex: 10,
        backgroundColor: primary,
        position: 'absolute',
        width: deviceWidth
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1
    },
    wrapper: {
        alignSelf: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});