import React, { ReactElement } from "react";
import { Switch, useColorMode } from "native-base";

export function DarkModeSwitch(): ReactElement<typeof Switch> {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Switch
            size="md"
            onToggle={toggleColorMode}
            isChecked={colorMode === 'dark'}
        />
    );
}
