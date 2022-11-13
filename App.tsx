import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./src/MainNavigation/MainNavigation";
import AppStatusbar from "./src/components/AppStatusBar";

export default function App() {
  return (
      <NavigationContainer>
          <NativeBaseProvider>
              <AppStatusbar />
              <MainNavigation />
          </NativeBaseProvider>
      </NavigationContainer>
  );
}