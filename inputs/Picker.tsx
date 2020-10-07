import React from 'react';
import { Picker as RNPicker } from '@react-native-community/picker';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import { PickerProps as RNPickerProps } from '@react-native-community/picker/typings/Picker';
import Text from './Text';

// When using this component you need to add the uuid polyfill for React Native to your project https://www.npmjs.com/package/react-native-get-random-values

type Item = { label: string; value: any };
export type PickerProps = {
    items: Item[];
    label?: string;
    style?: StyleProp<TextStyle>;
    itemStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    selectedValue?: any;
    onValueChange?: (value: number | string, index: number) => void;
    enabled?: boolean;
} & RNPickerProps;

export default function Picker(props: PickerProps) {
    const { items, label, style, itemStyle, labelStyle, ...otherProps } = props;
    const renderItem = (item: Item) => (
        <RNPicker.Item label={item.label} value={item.value} key={uuid()} />
    );

    return (
        <View>
            {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <RNPicker
                style={[styles.picker, style]}
                itemStyle={[styles.items, itemStyle]}
                {...otherProps}>
                {items.map(renderItem)}
            </RNPicker>
        </View>
    );
}

const styles = StyleSheet.create({
    picker: {},
    label: {},
    items: {},
});
