import {StyleSheet} from 'react-native';

const defaultFontSize = 16;
const headerFontSize = 20;
const defaultMarginBottom = 15;
const defaultMargin = 10;
const defaultPadding = 10;
const defaultPaddingTop = 15;
const defaultBorderWidth = 2;

const color1 = '#fcfff5';
const color2 = '#d1dbbd';
const color3 = '#91aa9d';
const color4 = '#3e606f';
const color5 = '#193441';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color5,
        paddingTop: defaultPaddingTop,
    },
    panel: {
        flex: 1,
        backgroundColor: color4,
        marginBottom: defaultMarginBottom,
        marginLeft: defaultMargin,
        marginRight: defaultMargin,
    },
    panelTitle: {
        padding: defaultPadding,
        backgroundColor: color3,
        borderStyle: 'solid',
        borderColor: color2,
        borderBottomWidth: defaultBorderWidth,
    },
    panelTitleText: {
        fontSize: headerFontSize,
        color: color1,
    },
    panelBody: {
        padding: defaultPadding + 5,
    },
    panelBodyText: {
        fontSize: defaultFontSize,
        color: color1,
    }
});

export default styles;