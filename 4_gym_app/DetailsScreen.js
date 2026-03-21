import React from 'react';
import { Text, Button, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderDetailsScreen({ route, navigation }) {

  const { name, membership } = route.params || {};

  return (
    <LinearGradient
      colors={['#43cea2', '#185a9d']}
      style={styles.container}
    >

      <Text style={styles.heading}>Membership Details</Text>

      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Membership: {membership}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74'
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
    color: '#fff',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  }
});