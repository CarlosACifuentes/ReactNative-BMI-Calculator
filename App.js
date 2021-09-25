import React, {Component, useState} from 'react';

import {TextInput, Text, View, Button, StyleSheet, Switch} from 'react-native';

export default function calculateBMI() {
  const [height, heightReceived] = React.useState('0');
  const [weight, onWeightReceived] = React.useState('0');
  const [BMI, onCalculateBMI] = React.useState('0');
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

      <View style = {styles.header}><Text style = {styles.title}>BMI Calculator</Text></View>

      <Text style = {styles.description}>BMI Calculator</Text>

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Text>{isEnabled ? 'SI' : 'Metric'}</Text>

      <Text>
        {isEnabled ? 'Enter your height (cm):' : 'Enter your height (in):'}
      </Text>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => heightReceived(text)}
        value={height}
        clearTextOnFocus="true"
      />
      <Text>
        {isEnabled ? 'Enter your weight (kg):' : 'Enter your weight (lb):'}
      </Text>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text2 => onWeightReceived(text2)}
        value={weight}
        clearTextOnFocus="true"
      />

      <Button
        title="Calculate"
        onPress={() => {
          isEnabled
            ? onCalculateBMI(weight / ((height / 100) * (height / 100)))
            : onCalculateBMI((weight / (height * height)) * 703);
        }}
      />
      <Text>Your BMI is: {BMI}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    //alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  header: {
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  title: {
    alignSelf: 'stretch',
    fontSize: 24,
    color: '#fff',
  },
  description: {
    fontSize: 15,
    color: '#fff',
    paddingBottom: 10,
  },

});
