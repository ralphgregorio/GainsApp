import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text,
    VStack
} from "native-base";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

function SettingsScreen(): ReactElement<typeof ScrollView> {
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2,
        px: 4
    });

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <VStack space={4} alignItems="left">
                    <Heading size={'2xl'}>Settings</Heading>
                    <Text>SettingsScreen!</Text>
                    <DarkModeSwitch />
                </VStack>
            </Box>
        </ScrollView>
    );
}

export default SettingsScreen;
