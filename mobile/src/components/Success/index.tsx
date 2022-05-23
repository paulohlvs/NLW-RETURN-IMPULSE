import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import { styles } from './styles';
import successImage from "../../assets/success.png"
import { Copyright } from '../Copyright';

interface Props {
    onFeedbackClear:  () => void
}

export function Success({onFeedbackClear}: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={successImage}
                style={styles.image} />

            <Text style={styles.title}> Agradecemos o feedback</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => onFeedbackClear()}
            >
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
}