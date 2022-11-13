import React, { ReactElement } from "react";
import { Text } from 'react-native';
import { Button, useColorMode } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen(): ReactElement<typeof SafeAreaView> {
    const { toggleColorMode } = useColorMode();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>SettingsScreen!</Text>
            <Button onPress={toggleColorMode} > Toggle DarkMode </Button>
        </SafeAreaView>
    );
}

export default SettingsScreen;
