import React, { ReactElement } from "react";
import { Divider } from "native-base";

export function AppDivider(): ReactElement<typeof Divider> {
    return (
        <Divider
            my="2"
            _light={{
                bg: "black"
            }}
            _dark={{
                bg: "light.50"
            }}
        />
    );
}
