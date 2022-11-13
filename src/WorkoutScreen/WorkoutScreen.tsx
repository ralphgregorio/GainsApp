import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text,
    VStack
} from "native-base";
import { CreateExerciseButton } from "./components/CreateExerciseButton";
import { AppDivider } from "../components/AppDivider";

function WorkoutScreen(): ReactElement<typeof ScrollView> {
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2,
        px: 4
    });

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <VStack>
                    <Heading size={'2xl'}>Workouts</Heading>
                    <Text>Workout!</Text>
                    <AppDivider />
                    <CreateExerciseButton />

                </VStack>
            </Box>
        </ScrollView>
    );
}

export default WorkoutScreen;
