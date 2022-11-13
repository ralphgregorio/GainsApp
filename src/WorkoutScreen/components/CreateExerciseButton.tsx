import React, { Fragment, ReactElement, useState } from "react";
import { Button } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LIGHT_MODE_COLOR } from "../../style-constants";
import {CreateExerciseModal} from "./CreateExerciseModal";

export function CreateExerciseButton(): ReactElement<typeof Fragment> {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button
                leftIcon={<MaterialCommunityIcons name="plus" size={20} color={LIGHT_MODE_COLOR}/>}
                _dark={{ bg: "coolGray.900" }}
                onPress={() => setShowModal(true)}
            >
                Create An Exercise
            </Button>
            <CreateExerciseModal onClose={setShowModal} isOpen={showModal} />
        </>
    )
}
