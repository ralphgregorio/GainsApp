import React, { ReactElement } from "react";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

function DashboardScreen(): ReactElement<typeof SafeAreaView> {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>DashboardScreen!</Text>
        </SafeAreaView>
    );
}

export default DashboardScreen;