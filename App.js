import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import DetailScreen from './screens/DetailScreen';
import Preview from './screens/Preview';
import DonationScreen from './screens/DonationScreen';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerTitle: "Login",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerTitle: "Register",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
          component={Register}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
          name="Details"
          component={DetailScreen}
        />

        <Stack.Screen
          name="Preview"
          options={{
            presentation: "modal",
            headerShown: "false",
          }}
          component={Preview}
        />
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
          name="Donate"
          component={DonationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

