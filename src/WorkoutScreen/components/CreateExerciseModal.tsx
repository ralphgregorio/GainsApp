import React, { ReactElement } from "react";
import {
    Modal,
    FormControl,
    Input,
    Button
} from "native-base";

type Props = {
    isOpen: boolean;
    onClose: (showModal: boolean) => void;
}

export function CreateExerciseModal({ isOpen, onClose }: Props): ReactElement<typeof Modal> {

    return (
        <Modal isOpen={isOpen} onClose={() => onClose(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                    <FormControl isRequired>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl mt="3" isRequired>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            onClose(false);
                        }}>
                            Cancel
                        </Button>
                        <Button onPress={() => {
                            onClose(false);
                        }}>
                            Add Exercise
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}
