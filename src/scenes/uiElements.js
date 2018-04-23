import {View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import styles from "../themes/styles";

class App extends Component {
    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <ScrollView>

                    <View style={styles.panel}>
                        <View style={styles.panelTitle}>
                            <Text style={styles.panelTitleText}>What is Lorem Ipsum?</Text>
                        </View>
                        <View style={styles.panelBody}>
                            <Text style={styles.panelBodyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                    </View>

                </ScrollView>


            </KeyboardAvoidingView>

        );
    }
}

export default App;