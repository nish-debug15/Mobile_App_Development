import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function OrderDetailsScreen({ route, navigation }) {

  const { product } = route.params || {};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Product Details</Text>

      <Text style={styles.text}>Product: {product}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1581888748626-2a3f240a6f9f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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