import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import MainNavigation from "./src/AppNavigation/MainNavigation";

export default function App() {
  return (
      <NativeBaseProvider>
          <View style={styles.container}>
              <Box>
                  <Text>Open up App.tsx to start working on your apps!</Text>
              </Box>
              <MainNavigation />
              <StatusBar style="auto" />
          </View>
      </NativeBaseProvider>

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