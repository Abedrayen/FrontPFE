import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(API_URL + 'signin', {
        username,
        password,
      });

      if (response.data.accessToken) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      throw error;
    }
  }

  async register(username, email, password) {
    try {
      const response = await axios.post(API_URL + 'signup', {
        username,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await AsyncStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
