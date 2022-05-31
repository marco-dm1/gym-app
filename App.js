import React from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { styles } from './styles'

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.title}>Gym Tracker and Weight Calculator</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.workout}>
            <Text style={styles.workoutTitle}>Arm Day Workout - 5/23/22</Text>
          </View>
          <View style={styles.exercise}>
            <Text>3x10 @ 150lbs</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}