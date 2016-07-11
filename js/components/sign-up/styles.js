
'use strict';

import { StyleSheet } from "react-native";
var React = require('react-native');
var { Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    mb20: {
        marginBottom: 20
    },
    asignupContainer: {
        marginTop: (deviceHeight/7) - 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    signupContainer: {
        marginTop: (deviceHeight/5) - 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    asignupHeader: {
    	alignSelf: 'center',
    	fontSize: 22,
        padding: 10,
    	fontWeight: 'bold',
    	marginTop: (deviceHeight/6)
    },
    signupHeader: {
        alignSelf: 'center',
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        marginTop: (deviceHeight/5) + 10,
    },
    background: {
        flex: 1,
        width: null,
        height:null,
    },
    iosInputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20
    },
    inputGrp: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20
    },
    iosInputIcon: {
        alignSelf: 'center',
        paddingLeft: 20
    },
    inputIcon: {
        alignSelf: 'center',
        marginLeft: 20
    },
    input: {
        paddingLeft: 15
    },
    signupBtn: {
        height: 50, 
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#aaa'
    },
    termsText: {
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 100, 
        opacity: 0.75,
        fontSize: 14,
        fontWeight: 'bold'
    },
});
