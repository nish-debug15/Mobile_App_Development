import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ route, navigation }) {

  const { name, course } = route.params || {};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Course Details</Text>

      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Course: {course}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644'
        }}
        style={styles.image}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  }
});