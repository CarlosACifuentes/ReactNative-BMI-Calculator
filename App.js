import React, {Component, useState} from 'react';

import {TextInput, Text, View, Button, StyleSheet, Switch} from 'react-native';

export default function calculateBMI() {
  const [height, heightReceived] = React.useState('0');
  const [weight, onWeightReceived] = React.useState('0');
  const [BMI, onCalculateBMI] = React.useState('0');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

      <View style = {styles.header}><Text style = {styles.title}>BMI Calculator</Text></View>

      <Text style = {styles.description}>Select between SI(kg,cm) and Metric(lb, in) by switching the toggle below.</Text>

      <Switch
        ios_backgroundColor="#fff"
        trackColor={{false: '#fff', true: '#233237'}}
        thumbColor={isEnabled ? "#fff" : "#233237"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Text style = {styles.text}>{isEnabled ? 'System selected: SI' : 'System selected: Metric'}</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  header: {
    alignSelf:'stretch',
    paddingBottom: 10,
    marginBottom: 30,
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
    paddingBottom: 5,
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
    paddingStart: 5,
  },
  buttonView: {
      alignSelf: 'stretch',
      alignItems: 'center',
      backgroundColor: '#59cbbd',
      padding:10,
      marginTop: 15,
    
  },


});