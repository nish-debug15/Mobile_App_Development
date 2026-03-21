import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      colors={['#4facfe', '#6a11cb']}
      style={styles.container}
    >

      <Text style={styles.title}>Travel Explorer</Text>
      <Text style={styles.heading}>Register For Travel</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Destination"
        value={destination}
        onChangeText={setDestination}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text>I Agree to Terms & Conditions</Text>
      </View>

      <Button
        title="Register"
        onPress={() => {
          if (!isChecked) {
            alert("Please accept terms");
            return;
          }

          navigation.navigate('Details', { name, email, destination });
        }}
      />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  heading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  }
});