import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { ScrollView, View, Text, Button, Switch, Alert } from 'react-native';
import styles from './styles';

export default function App() {
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState(0); 
  const [bottles, setBottles] = useState(0); 
  const [gender, setGender] = useState('male'); 
  const [result, setResult] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [resultColor, setResultColor] = useState('black');

  const handleTimeIncrement = () => {
    setTime(time + 1);
  };

  const handleTimeDecrement = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  const handleBottlesIncrement = () => {
    setBottles(bottles + 1);
  };

  const handleBottlesDecrement = () => {
    if (bottles > 0) {
      setBottles(bottles - 1);
    }
  };

  const calculateBloodAlcoholLevel = () => {
    if (!weight) {
      Alert.alert('Warning', 'Please enter your weight.');
      return;
    }

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let resultValue;

    if (gender === 'male') {
      resultValue = gramsLeft / (weight * 0.7);
    } else {
      resultValue = gramsLeft / (weight * 0.6);
    }

    resultValue = Math.max(resultValue, 0);

    let color;
    if (resultValue <= 0.5) {
      color = 'green';
    } else if (resultValue <= 0.8) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    
    setResult(resultValue.toFixed(2));
    setResultColor(color);
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: isDarkTheme ? 'black' : 'white' }]}
    >
      <Text style={[styles.header, { color: isDarkTheme ? 'white' : 'black' }]}>Alcometer</Text>

      <View style={styles.genderContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Gender:</Text>
        <Button
          title="Male"
          onPress={() => setGender('male')}
          color={gender === 'male' ? 'blue' : 'gray'}
        />
        <Button
          title="Female"
          onPress={() => setGender('female')}
          color={gender === 'female' ? 'pink' : 'gray'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>

      <View style={styles.stepperContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Number of Bottles:</Text>
        <View style={styles.stepper}>
          <Button title="-" onPress={handleBottlesDecrement} color="blue" />
          <Text style={[styles.stepperNumber, { color: isDarkTheme ? 'white' : 'black' }]}>{bottles}</Text>
          <Button title="+" onPress={handleBottlesIncrement} color="blue" />
        </View>
      </View>

      <View style={styles.stepperContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Time (hours):</Text>
        <View style={styles.stepper}>
          <Button title="-" onPress={handleTimeDecrement} color="blue" />
          <Text style={[styles.stepperNumber, { color: isDarkTheme ? 'white' : 'black' }]}>{time}</Text>
          <Button title="+" onPress={handleTimeIncrement} color="blue" />
        </View>
      </View>

      <View style={styles.themeSwitchContainer}>
        <Text style={[styles.label, { color: isDarkTheme ? 'white' : 'black' }]}>Dark Theme:</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={(value) => setIsDarkTheme(value)}
          trackColor={{ false: 'gray', true: 'blue' }}
          thumbColor={isDarkTheme ? 'blue' : 'gray'}
        />
      </View>

      <Button
        title="Calculate"
        onPress={calculateBloodAlcoholLevel}
        color="blue"
      />

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultLabel, { color: isDarkTheme ? 'white' : 'black' }]}>Blood Alcohol Level:</Text>
          <Text style={[styles.resultValue, { color: resultColor }]}>{result}</Text>
        </View>
      )}
    </ScrollView>
  );
}
