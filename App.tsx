import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./src/AppNavigation/MainNavigation";

export default function App() {
  return (
      <NavigationContainer>
          <NativeBaseProvider>
            <MainNavigation />
          </NativeBaseProvider>
      </NavigationContainer>
  );
}