import React from 'react';
import DatePicker from '../DatePicker';
import { useField, useFormikContext } from 'formik';
import Text from '../Text';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type Props = {
    name: string;
    mode: 'date' | 'time';
    label?: string;
    showError?: boolean;
    errorStyle?: StyleProp<TextStyle>;
};

export default function FormikDatePicker(props: Props) {
    const { name, mode, showError, errorStyle, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    return (
        <>
            <DatePicker
                value={field.value}
                setValue={(value: Date) => setFieldValue(name, value)}
                mode={mode}
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
