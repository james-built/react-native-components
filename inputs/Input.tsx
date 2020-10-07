import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
} from 'react-native';
import Text from './Text';

type Props = {
    onChangeText?: any;
    onBlur?: (e: any) => void;
    value?: any;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    placeholder?: string;
    label?: string;
} & TextInputProps;

export default function Input(props: Props) {
    const { label } = props;

    return (
        <View>
            {!!label && (
                <Text style={[styles.label, props.labelStyle]}>{label}</Text>
            )}
            <TextInput style={[styles.input, props.style]} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {},
    label: {},
});
