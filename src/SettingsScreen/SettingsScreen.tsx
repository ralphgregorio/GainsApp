import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text,
    VStack,
    HStack,
    Button
} from "native-base";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

function SettingsScreen(): ReactElement<typeof ScrollView> {
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2,
        px: 4
    });

    const clearAsyncStorage = async() => {
        await AsyncStorage.clear();
        console.warn('App will now be restarted')
        await Updates.reloadAsync();

    }

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <VStack space={4} alignItems="left">
                    <Heading size={'2xl'}>Settings</Heading>
                    <HStack space={2}>
                        <Text>Toggle Dark Mode</Text>
                        <DarkModeSwitch />
                    </HStack>
                    <Button onPress={clearAsyncStorage}>
                        Clear Async Storage and Restart
                    </Button>
                </VStack>
            </Box>
        </ScrollView>
    );
}

export default SettingsScreen;
