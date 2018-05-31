import {View, Text} from "react-native";
import React from 'react';
import styles from "../themes/styles";

const renderTitle = (title) => (
    <View style={styles.panelTitle}>
        <Text style={styles.panelTitleText}>{title}</Text>
    </View>
);

const renderBodyText = (body_text) => (
    <View style={styles.panelBody}>
        <Text style={styles.panelBodyText}>{body_text}</Text>
    </View>
);

const renderBody = (body) => (
    <View style={styles.panelBody}>
        {body}
    </View>
);

const Panel = (props) => (
    <View style={styles.panel}>
        {(props.title) ? renderTitle(props.title) : null}
        {(props.body_text) ? renderBodyText(props.body_text) : null}
        {(props.body) ? renderBody(props.body) : null}
    </View>
);

export default Panel;