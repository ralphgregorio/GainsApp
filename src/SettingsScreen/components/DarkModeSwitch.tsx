import React, { ReactElement } from "react";
import { Switch, HStack, Text, useColorMode } from "native-base";

export function DarkModeSwitch(): ReactElement<typeof HStack> {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack>
            <Text> Toggle Dark Mode </Text>
            <Switch
                size="md"
                onToggle={toggleColorMode}
                isChecked={colorMode === "dark"}
            />
        </HStack>
    );
}
