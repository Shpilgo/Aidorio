import {View, Text, TextInput} from 'react-native';
import React, {Component} from 'react';
import styles, {placeholderTextColor} from '../themes/styles';


class Input extends Component {

    render() {
        const {props} = this;
        return (
            <View style={styles.inputWrapper}>
                <View style={styles.inputTitleWrapper}>
                    <Text style={styles.inputTitle}>{props.title}</Text>
                </View>
                <View style={styles.textInputWrapper}>
                    <TextInput {...props} style={styles.textInput} placeholderTextColor={placeholderTextColor} underlineColorAndroid='rgba(0,0,0,0)' />
                </View>
            </View>
        )
    }
}


export default Input;