import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const response = await AuthService.login(values.username, values.password);

      if (response.accessToken) {
        // Authentication successful, navigate to the profile screen
        navigation.navigate('Profile');
      } else {
        setErrorMessage('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setErrorMessage(resMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image  source={require('Youmee/assests/Untitled-1.jpg')} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={values.username}
              onChangeText={handleChange('username')}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="blue" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>
            
            {errorMessage && (
              <Text style={styles.error}>{errorMessage}</Text>
            )}
          </>
        )}
      </Formik>
      <Text>Or</Text>
      <Text onPress={() => navigation.navigate('Register')} style={styles.buttonTexts}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonTexts: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'blue',
    margin:5,
    padding:10,
    
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },

  image: {
    width: 250, 
    height: 250,

  },
});

export default Login;
