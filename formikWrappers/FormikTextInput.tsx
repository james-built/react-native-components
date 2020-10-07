import React from 'react';
import Input from '../Input';
import { useField, useFormikContext } from 'formik';
import Text from '../Text';
import { StyleProp, StyleSheet, TextInputProps, TextStyle } from 'react-native';

type Props = {
    name: string;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    showError?: boolean;
    errorStyle?: StyleProp<TextStyle>;
} & TextInputProps;

export default function FormikTextInput(props: Props) {
    const { name, showError, errorStyle, ...otherProps } = props;
    const { handleChange, handleBlur } = useFormikContext();
    const [field, meta] = useField(name);

    return (
        <>
            <Input
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
                value={field.value}
                {...otherProps}
            />
            {meta.error && (showError ?? true) && (
                <Text style={[styles.error, errorStyle]}>{meta.error}</Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    error: {},
});
