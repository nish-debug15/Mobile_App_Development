import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [name, setName] = useState('');
  const [membership, setMembership] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={styles.container}
    >

      <Text style={styles.title}>FitZone</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Membership Type"
        value={membership}
        onChangeText={setMembership}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text>Agree to Rules</Text>
      </View>

      <Button
        title="Join Now"
        onPress={() => {

          if (!isChecked) {
            alert("Please agree to rules");
            return;
          }

          navigation.navigate('Details', { name, membership });
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
    color: '#fff',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
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