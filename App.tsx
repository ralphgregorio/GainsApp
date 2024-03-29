import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./src/MainNavigation/MainNavigation";
import AppStatusbar from "./src/components/AppStatusBar";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./redux/store";
import { colorModeManager } from "./src/colorModeManager";

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <NativeBaseProvider colorModeManager={colorModeManager}>
                  <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                      <AppStatusbar />
                      <MainNavigation />
                  </PersistGate>
              </NativeBaseProvider>
          </NavigationContainer>
      </Provider>
  );
}