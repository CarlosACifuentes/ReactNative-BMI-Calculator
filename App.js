/*
  Author: Carlos Cifuentes
  Student ID: 301140805
  Code updated: 25 Sept 2021
  Course: MAPD712 - Web Techs - Mobile Platforms
 */

import React, {Component, useState} from 'react';

import {TextInput, Text, View, Button, StyleSheet, Switch} from 'react-native';

export default function calculateBMI() {
  const [height, heightReceived] = React.useState('0');
  const [weight, onWeightReceived] = React.useState('0');
  const [BMI, onCalculateBMI] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

      <View style = {styles.header}><Text style = {styles.title}>BMI Calculator</Text></View>

      <View style = {styles.switch}>
        <Text style = {styles.systemSelected}>(in,lb)</Text>
        <Switch
          ios_backgroundColor="#fff"
          trackColor={{false: '#fff', true: '#233237'}}
          thumbColor={isEnabled ? "#fff" : "#233237"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style = {styles.systemSelected}>(cm,kg)</Text>
      </View>
      
      <Text style = {styles.text}>
        {isEnabled ? 'Enter your height (cm):' : 'Enter your height (in):'}
      </Text>

      <TextInput
        style={styles.inputs}
        onChangeText={text => heightReceived(text)}
        value={height}
        clearTextOnFocus="true"
      />
      <Text style = {styles.text}>
        {isEnabled ? 'Enter your weight (kg):' : 'Enter your weight (lb):'}
      </Text>

      <TextInput
        style={styles.inputs}
        onChangeText={text2 => onWeightReceived(text2)}
        value={weight}
        clearTextOnFocus="true"
      />
      <View style={styles.buttonView}>
      <Button
        title="Calculate"
        color = "white"
        onPress={() => {
          isEnabled
            ? onCalculateBMI(weight / ((height / 100) * (height / 100)))
            : onCalculateBMI((weight / (height * height)) * 703);
        }}
      />
      </View>

      <Text style = {styles.text}>Your BMI is: {BMI}</Text>
      <View style = {styles.categoriesView}>
          <Text style = {styles.subtitle}>BMI Categories</Text>
          <Text style = {styles.categories}>Underweight = 18.4 or less</Text>
          <Text style = {styles.categories}>Normal weight = 18.5 ??? 24.9</Text>
          <Text style = {styles.categories}>Overweight = 25 ??? 29.9</Text>
          <Text style = {styles.categories}>Obesity = 30 or greater</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  header: {
    alignSelf:'stretch',
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  description: {
    alignSelf: 'stretch',
    fontSize: 16,
    color: '#fff',
    paddingBottom: 10,
  },
  switch: {
    flexDirection: "row",
    marginTop: 5,
  },
  systemSelected: {
    fontSize: 15,
    color: '#fff',
    paddingBottom: 25,
    paddingTop: 9,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    alignSelf: 'stretch',
    fontSize: 15,
    color: '#fff',
    paddingBottom: 3,
    paddingTop: 15,
    fontWeight: 'bold'
  },
  inputs: {
    alignSelf: 'stretch',
    height: 40, 
    borderColor: '#59cbbd', 
    borderWidth: 2,
    color: '#fff',
    paddingStart: 10,
  },
  buttonView: {
      alignItems: 'center',
      backgroundColor: '#59cbbd',
      padding:5,
      marginTop: 20,
      marginBottom: 20,
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  categories: {
    fontSize: 15,
    color: '#fff',
    paddingBottom: 5,
  },
  categoriesView: {
    alignSelf:'stretch',
    fontSize: 15,
    color: '#fff',
    paddingBottom: 10,
    borderTopColor: '#fff',
    borderTopWidth: 1,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

});