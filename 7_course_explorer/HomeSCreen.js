import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  const [course, setCourse] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Course Explorer</Text>
      <Text style={styles.heading}>Find Your Course</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Course Name"
        value={course}
        onChangeText={setCourse}
      />

      <Button
        title="Search"
        onPress={() => navigation.navigate('Details', { course })}
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
    marginBottom: 10
  },
  heading: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    width: 250,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff'
  }
});