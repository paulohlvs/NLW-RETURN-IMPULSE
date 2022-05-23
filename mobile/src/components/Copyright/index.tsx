import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View >
      <Text style={styles.text} >Feito com ♥ pela Thinness | SI </Text>
    </View>
  );
}

// <a href="https://github.com/paulohlvs" target="_blank">Thinness | SI</a>