import React from 'react';
import ToggleButtonGroup, { ToggleButton } from '../ToggleButtonGroup';
import Text from '../Text';
import { useField, useFormikContext } from 'formik';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type Props = {
    name: string;
    buttons: ToggleButton[];
    errorStyle?: StyleProp<TextStyle>;
    showError?: boolean;
};

export default function FormikToggleButtonGroup(props: Props) {
    const { name, buttons, showError, errorStyle, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    return (
        <>
            <ToggleButtonGroup
                buttons={buttons}
                selectedButton={field.value}
                onSelect={(value) => setFieldValue(value, name)}
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
