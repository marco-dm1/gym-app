import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Exercise{
    constructor(iName, iSets, iReps, iWeight){
        this.name = iName;
        this.sets = iSets;
        this.reps = iReps;
        this.weight = iWeight;
    }


    displayExercise(){
        return this.name + " - " + this.sets + "x" + this.reps + (this.weight ? (" @ " + this.weight + "lbs"): "");
    }
}