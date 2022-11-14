import React, {Fragment, ReactElement} from "react";
import {
    VStack,
    Spacer,
    Box,
    HStack,
    Text
} from "native-base";
import {Exercise} from "../../../redux/types";

type Props = {
    exercises: Array<Exercise>;
}

export function ExerciseList({ exercises }: Props): ReactElement<typeof Fragment> {
    return (
        <>
            {exercises.map((exercise) => {
                return (
                <Box
                    borderBottomWidth="1"
                    _dark={{borderColor: "muted.50"}}
                    borderColor="muted.800"
                    pl={["0", "4"]}
                    pr={["0", "5"]}
                    py="2"
                    key={exercise.id}
                >
                    <HStack space={[2, 3]} justifyContent="space-between">
                        <VStack>
                            <Text
                                _dark={{color: "warmGray.50"}}
                                color="coolGray.800"
                                bold
                            >
                                {exercise.name}
                            </Text>
                            <Text
                                color="coolGray.600"
                                _dark={{color: "warmGray.200"}}
                            >
                                {exercise.bodyPart}
                            </Text>
                        </VStack>
                        <Spacer/>
                        <Text
                            fontSize="xs"
                            _dark={{color: "warmGray.50"}}
                            color="coolGray.800"
                            alignSelf="flex-start"
                        >
                            {exercise.category}
                        </Text>
                    </HStack>
                </Box>
                );
            })}
        </>
    )
}
