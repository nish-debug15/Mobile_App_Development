import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function HomeScreen({ navigation }) {

  const [name, setName] = useState('');
  const [hotel, setHotel] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>StayEasy</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Hotel Name"
        value={hotel}
        onChangeText={setHotel}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text>Agree to Policies</Text>
      </View>

      <Button
        title="Book Now"
        onPress={() => {

          if (!isChecked) {
            alert("Please agree to policies");
            return;
          }

          navigation.navigate('Details', { name, hotel });
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    width: 250,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  }
});