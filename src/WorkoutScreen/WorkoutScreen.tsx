import React, { ReactElement } from "react";
import {
    Box,
    useSafeArea,
    ScrollView,
    Heading,
    Text,
    VStack,
    HStack
} from "native-base";
import { CreateExerciseButton } from "./components/CreateExerciseButton";
import { AppDivider } from "../components/AppDivider";
import useListExercise from "./hooks/useListExercise";
import {ExerciseList} from "./components/ExercisesList";

function WorkoutScreen(): ReactElement<typeof ScrollView> {
    const { exercises } = useListExercise();
    const safeAreaProps = useSafeArea({
        safeAreaTop: true,
        pt: 2,
        px: 4
    });

    return (
        <ScrollView _dark={{ bg: "coolGray.800" }}>
            <Box {...safeAreaProps}>
                <VStack space={2}>
                    <Heading size={'2xl'}>Workouts</Heading>
                    <AppDivider />
                    <HStack justifyContent={"space-between"}>
                        <Text fontSize={"2xl"} alignSelf={"center"} bold >
                            Exercises
                        </Text>
                        <CreateExerciseButton />
                    </HStack>
                    <ExerciseList exercises={exercises} />
                </VStack>
            </Box>
        </ScrollView>
    );
}

export default WorkoutScreen;
