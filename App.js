import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>Gym Tracker and Weight Calculator</Text>
      </View>
      <ScrollView>
        <View style={styles.workout}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button title="Test button 1"></Button>
        </View>

      </ScrollView>
    </View>
  );
}