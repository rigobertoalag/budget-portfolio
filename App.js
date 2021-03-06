import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Routes
import Login from './components/users/Login.jsx'
import TabNav from './components/TabNav.jsx'
import IndexBudget from './components/budget/IndexBudget.jsx'
import SavingDetails from './components/budget/SavingDetails.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        // <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNav" component={TabNav} />

          <Stack.Screen name="IndexBudget" component={IndexBudget} />
          <Stack.Screen name="SavingDetails" component={SavingDetails} />

          {/* Testing routes */}
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
