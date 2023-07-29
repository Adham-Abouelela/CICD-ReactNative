import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const Greetings = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter your name..."
        onChangeText={(text) => setName(text)}
      />
      <Text>Welcome, {name}!</Text>
    </View>
  );
};

export default Greetings;
