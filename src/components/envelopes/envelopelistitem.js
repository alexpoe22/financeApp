'use strict';
var styles = require('./styles/styles');
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native';
import EnvSlider from './envslider'


class EnvelopeListItem extends React.Component {
    render() {
        var item = this.props.item;
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        } 
        if(mm<10) {
            mm='0'+mm
        } 
        today = mm+'/'+dd+'/'+yyyy;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        <Text
                            style={[styles.txt, item.complete && styles.completed]}>
                              {item.txt} {"\n"}
                        </Text>
                        <EnvSlider date={item.date} cost={item.cost} bal={item.bal} />
                     
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

module.exports = EnvelopeListItem;