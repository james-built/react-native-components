import React, { ReactChildren } from 'react';
import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import Text from './Text';

type Props = {
    children?: ReactChildren;
    text?: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

export default function Button(props: Props) {
    const { text, onPress, children, containerStyle, textStyle } = props;

    const handlePress = () => {
        onPress();
    };

    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={handlePress}>
            {!!text && <Text style={[styles.text, textStyle]}>{text}</Text>}
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 4,
    },
    text: {
        textAlign: 'center',
    },
});
