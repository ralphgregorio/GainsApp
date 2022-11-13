import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./src/AppNavigation/MainNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <NativeBaseProvider>
                <MainNavigation />
              </NativeBaseProvider>
          </NavigationContainer>
      </SafeAreaProvider>
  );
}