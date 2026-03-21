import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  const [recipe, setRecipe] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Recipe Finder</Text>
      <Text style={styles.heading}>Discover Recipes</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Recipe Name"
        value={recipe}
        onChangeText={setRecipe}
      />

      <Button
        title="Find Recipe"
        onPress={() => navigation.navigate('Details', { recipe })}
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