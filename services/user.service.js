import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  async getPublicContent() {
    try {
      const response = await axios.get(API_URL + 'all');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getUserBoard() {
    try {
      const response = await axios.get(API_URL + 'users', {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getModeratorBoard() {
    try {
      const response = await axios.get(API_URL + 'mod', {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAdminBoard() {
    try {
      const response = await axios.get(API_URL + 'admin', {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
