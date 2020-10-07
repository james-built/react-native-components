import React, { Dispatch, SetStateAction, useState } from 'react';
import RNDateTimePicker, {
    AndroidNativeProps,
    Event,
    IOSNativeProps,
} from '@react-native-community/datetimepicker';
import {
    Dimensions,
    Modal,
    Platform,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from 'react-native';
import Text from './Text';

type Props = {
    value: Date | undefined;
    setValue: (date: Date) => void | Dispatch<SetStateAction<Date>>;
    mode: 'date' | 'time';
    onChange?: (e: Event, date?: Date) => void;
    label?: string;
    inputContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;
    modalContentStyle?: StyleProp<ViewStyle>;
} & IOSNativeProps &
    AndroidNativeProps;

export default function DatePicker(props: Props) {
    const {
        value,
        setValue,
        mode,
        inputContainerStyle,
        label,
        labelStyle,
        textStyle,
        modalContentStyle,
        ...otherProps
    } = props;
    const [showPicker, setShowPicker] = useState<boolean>(false);

    const handleChange = (e: Event, selectedDate?: Date) => {
        const date = selectedDate || value;
        setShowPicker(Platform.OS === 'ios');
        setValue(date);
    };

    const handleClose = () => {
        setShowPicker(false);
    };

    return (
        <View style={[styles.inputContainer, inputContainerStyle]}>
            {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <TouchableOpacity onPress={() => setShowPicker(true)}>
                {mode === 'time' ? (
                    <Text style={[styles.text, textStyle]}>
                        {value && value.toLocaleTimeString()}
                    </Text>
                ) : (
                    <Text style={[styles.text, textStyle]}>
                        {value && value.toLocaleDateString()}
                    </Text>
                )}
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType={'slide'}
                visible={showPicker}>
                <TouchableWithoutFeedback onPress={handleClose}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalWrapper}>
                            <View
                                style={[
                                    styles.modalContent,
                                    modalContentStyle,
                                ]}>
                                <RNDateTimePicker
                                    value={value || new Date()}
                                    mode={mode}
                                    onChange={handleChange}
                                    {...otherProps}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {},
    label: {
        padding: 2,
    },
    text: {
        margin: 2,
        padding: 2,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
    },
    modalWrapper: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        height: Dimensions.get('window').height / 2,
        marginTop: Dimensions.get('window').height / 2,
    },
    modalContent: {
        backgroundColor: '#D3D3D3',
    },
});
