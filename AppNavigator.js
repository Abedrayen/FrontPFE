// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Import your screen components
import TheniScreen from './screens/TheniScreen';
import Login from './components/Login';
import Register from './components/Register';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Theni" component={TheniScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
