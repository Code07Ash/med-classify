import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, mode } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Mode: {mode}</Text>
      <Text>Score: {score}</Text>
      <Button
        title="Give Feedback"
        onPress={() => navigation.navigate('Survey')}
      />
    </View>
  );
}