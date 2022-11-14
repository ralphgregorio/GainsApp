import React, { ReactElement } from "react";
import { StatusBar, useColorMode } from "native-base";

function AppStatusbar(): ReactElement<typeof StatusBar> {
    const { colorMode, } = useColorMode();

    const color = colorMode === 'dark' ? 'light-content' : 'dark-content';

    return (
        <StatusBar barStyle={color}/>
    );
}

export default AppStatusbar;
