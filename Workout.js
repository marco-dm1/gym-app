import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Workout{
    constructor(iDate, iName){
        this.date = iDate;
        this.name = iName;
        this.exerciseArray = []; // Array of exercise objects
    }

    displayWorkout(){
        //return iDate + " " + iName;
        return (
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <StatusBar style="auto" />
              <Button title="Test button 1"></Button>
            </View>
        );
    }

}