import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Copyright } from '../Copyright';
import { Optinon } from '../Optinon';
import { FeedbackType } from '../Widget';


interface Props{
  onFeedbackTypeChang: (feedbackType: FeedbackType) => void;
}


export function Options({onFeedbackTypeChang}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes)
            .map(([key, value]) => (
              <Optinon
                key={key}
                title={value.title}
                image={value.image} 
                onPress={()=>onFeedbackTypeChang(key as FeedbackType)}
                />
            ))
        }

      </View>

      <Copyright />

    </View>
  );
}