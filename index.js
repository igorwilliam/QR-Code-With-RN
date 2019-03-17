/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        return (
            <View style={styles.custom}>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                    reactivate={true}
                    showMarker={true}
                    containerStyle={styles.custom}
                    markerStyle={styles.custom2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    custom:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    
    },
    custom2: {
        borderColor: 'red'
    },

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'red',
    },
    buttonTouchable: {
        padding: 16,
    },
});



AppRegistry.registerComponent(appName, () => ScanScreen);
