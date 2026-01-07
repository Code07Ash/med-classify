import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { drugs } from '../data/drugs';
import { logEvent } from '../services/logger';

export default function QuizScreen({ route, navigation }) {
  const { mode } = route.params;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const answer = (selected) => {
    if (selected === drugs[index].class) setScore(score + 1);
    logEvent({ mode, question: drugs[index].name, selected });
    setIndex(index + 1);
  };

  if (index >= drugs.length) {
    navigation.navigate('Results', { score, mode });
    return null;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>{drugs[index].name}</Text>
      <Button title="Antibiotic" onPress={() => answer('Antibiotic')} />
      <Button title="Analgesic" onPress={() => answer('Analgesic')} />
      <Button title="Antidiabetic" onPress={() => answer('Antidiabetic')} />
      <Button title="Statin" onPress={() => answer('Statin')} />
    </View>
  );
}