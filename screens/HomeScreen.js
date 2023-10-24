// HomeScreen.js
import React from 'react';
import { View, Text, Button,  StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bd}>   
    <Text>Welcome to Youmee. </Text>
    <Text>For more pets premenades programs</Text>
     <Image  source={require('Youmee/assests/Untitled-1.jpg')} style={styles.image} resizeMode="contain" />
      <Button
        title="Join Youmee"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bd:{
    backgroundColor:'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 400, 
    height: 400,

  },
});


export default HomeScreen;
