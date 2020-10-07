import {
    StyleSheet,
    Text as RNText,
    TextProps as RNTextProps,
} from 'react-native';
import React, { PropsWithChildren } from 'react';

export interface TextProps extends RNTextProps {}

export default function Text(props: PropsWithChildren<TextProps>) {
    return <RNText style={[styles.text, props.style]}>{props.children}</RNText>;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'SF Pro Text',
    },
});
