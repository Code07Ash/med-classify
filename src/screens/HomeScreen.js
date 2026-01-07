import React from 'react';
import { View, Button, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Select Learning Mode</Text>
      <Button
        title="Non-Gamified Mode"
        onPress={() => navigation.navigate('Quiz', { mode: 'control' })}
      />
      <Button
        title="Gamified Mode"
        onPress={() => navigation.navigate('Quiz', { mode: 'test' })}
      />
    </View>
  );
}