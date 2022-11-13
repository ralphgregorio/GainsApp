import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from "./src/AppNavigation/MainNavigation";
import WorkoutPage from "./src/WorkoutsScreen/WorkoutPage";

const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <Box>
            <Text>Open up App.tsx to start working on your apps!</Text>
        </Box>
    );
}

export default function App() {
  return (
      <NavigationContainer>
          <NativeBaseProvider>
              <View style={styles.container}>
                  <Stack.Navigator>
                      <Stack.Screen name={'Workout'} component={WorkoutPage} />
                      <Stack.Screen name={'Home'} component={HomeScreen} />
                  </Stack.Navigator>
                  <MainNavigation />
                  <StatusBar style="auto" />
              </View>
          </NativeBaseProvider>
      </NavigationContainer>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});