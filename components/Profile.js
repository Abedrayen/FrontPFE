import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing data locally
import { useNavigation } from '@react-navigation/native'; // React Navigation

export default function Profile() {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        // Use AsyncStorage to get the current user (assuming you stored it as JSON)
        const currentUserJSON = await AsyncStorage.getItem('user');
        if (!currentUserJSON) {
          navigation.navigate('Home'); // Redirect to Home if user is not logged in
        } else {
          setCurrentUser(JSON.parse(currentUserJSON));
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {currentUser ? (
        <View>
          <View style={styles.header}>
            <Text>
              <Text style={styles.username}>{currentUser.username}</Text> Profile
            </Text>
          </View>
          <Text>
            <Text style={styles.boldText}>Token:</Text>{' '}
            {currentUser.accessToken.substring(0, 20)} ...{' '}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </Text>
          <Text>
            <Text style={styles.boldText}>Id:</Text> {currentUser.id}
          </Text>
          <Text>
            <Text style={styles.boldText}>Email:</Text> {currentUser.email}
          </Text>
          <Text style={styles.boldText}>Authorities:</Text>
          <View>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <Text key={index}>{role}</Text>
              ))}
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {/* Implement a button to navigate to the Home screen */}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
};
