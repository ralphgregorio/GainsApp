import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text,
    useColorMode,
    Button
} from "native-base";


function SettingsScreen(): ReactElement<typeof ScrollView> {
    const { toggleColorMode } = useColorMode();
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2
    });

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <Heading size={'2xl'}>Settings</Heading>
                <Text>SettingsScreen!</Text>
                <Button onPress={toggleColorMode} > Toggle DarkMode </Button>
            </Box>
        </ScrollView>
    );
}

export default SettingsScreen;
