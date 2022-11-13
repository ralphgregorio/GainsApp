import React, { ReactElement } from "react";
import { Text } from 'react-native';
import { Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

function ProgressScreen(): ReactElement<typeof SafeAreaView> {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box>
                <Text>ProgressScreen!</Text>
            </Box>
        </SafeAreaView>
    );
}

export default ProgressScreen;
