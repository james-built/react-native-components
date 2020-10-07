import React from 'react';
import { useField, useFormikContext } from 'formik';
import Picker, { PickerProps } from '../Picker';
import Text from '../Text';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type FormikPickerProps = {
    name: string;
    errorStyle?: StyleProp<TextStyle>;
    showError?: boolean;
} & PickerProps;

export default function FormikPicker(props: FormikPickerProps) {
    const { name, items, showError, errorStyle, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (value: number | string) => {
        setFieldValue(name, value);
    };

    return (
        <>
            <Picker
                items={items}
                selectedValue={field.value}
                onValueChange={handleChange}
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
