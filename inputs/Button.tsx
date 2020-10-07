import React, { ReactChildren } from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text';

type Props = {
    children?: ReactChildren;
    text?: string;
    onPress: () => void;
};

export default function Button(props: Props) {
    const { text, onPress, children } = props;

    const handlePress = () => {
        onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            {!!text && <Text>{text}</Text>}
            {children}
        </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({});
