import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { v4 as uuid } from 'uuid';
import Text from './Text';

export type ToggleButton = {
    text: string;
    value: any;
};

type Props = {
    buttons: ToggleButton[];
    onSelect: (value: any) => void;
    selectedButton?: string;
    containerStyles?: StyleProp<ViewStyle>;
    buttonContainerStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
};

export default function ToggleButtonGroup(props: Props) {
    const {
        containerStyles,
        buttons,
        selectedButton,
        onSelect,
        buttonContainerStyle,
        buttonTextStyle,
    } = props;
    const [selected, setSelected] = useState<string>(
        buttons[0].value || selectedButton,
    );

    const handleButtonPress = (button: ToggleButton) => {
        setSelected(button.value);
        onSelect(button.value);
    };

    const renderButton = (button: ToggleButton) => {
        let isSelected = selected === button.value;
        if (selectedButton) {
            // is a controlled component
            isSelected = selectedButton === button.value;
        }
        return (
            <TouchableOpacity
                key={uuid()}
                style={[
                    styles.buttonContainer,
                    buttonContainerStyle,
                    isSelected ? styles.selected : null,
                ]}
                onPress={() => handleButtonPress(button)}>
                <Text style={[styles.buttonText, buttonTextStyle]}>
                    {button.text}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, containerStyles]}>
            {buttons.map(renderButton)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonContainer: {
        flex: 1,
        padding: 4,
    },
    buttonText: {
        textAlign: 'center',
    },
    selected: {
        backgroundColor: '#D3D3D3',
    },
});
