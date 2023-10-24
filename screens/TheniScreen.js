// TheniScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const TheniScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Theni Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default TheniScreen;
