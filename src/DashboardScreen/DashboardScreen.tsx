import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text
} from "native-base";


function DashboardScreen(): ReactElement<typeof ScrollView> {
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2
    });

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <Heading size={'2xl'}>Dashboard</Heading>
                <Text>ProgressScreen!</Text>
            </Box>
        </ScrollView>
    );
}

export default DashboardScreen;