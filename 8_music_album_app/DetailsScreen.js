import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ route, navigation }) {

  const { album } = route.params || {};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Album Details</Text>

      <Text style={styles.text}>Album: {album}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4'
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