import React from 'react';
import { Text, Button, StyleSheet, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function OrderDetailsScreen({ route, navigation }) {

  const { name, email, destination } = route.params || {};

  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={styles.container}
    >

      <Text style={styles.heading}>Travel Details</Text>

      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Destination: {destination}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1628699543232-dc241b48a4b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D'
        }}
        style={styles.image}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  }
});