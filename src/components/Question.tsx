import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { editGameState } from "../store/gameSlice";
import { selectDoor } from "../store/doorsSlice";
import { editStats } from "../store/statsSlice";

import Container from "../styles/container";
import Button from "../styles/button";
import getRandomNumber from "../utils/getRandomNumber";

const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const doors = useAppSelector((state) => state.doors.doorNumbers);
    const stats = useAppSelector((state) => state.stats);
    const { selected, correct } = useAppSelector((state) => state.doors);

    const notSelected = doors.filter((door) => door.number !== selected);

    const handleChangeDoor = (choice: boolean) => {
        const elementName = choice ? "changed" : "notChanged";
        const newSelected = choice ? notSelected[1].number : selected;
        const statsElement = { ...stats[elementName], count: stats[elementName].count + 1 };
        if (newSelected !== correct) {
            statsElement.deaths = statsElement.deaths + 1;
        } else {
            statsElement.wins = statsElement.wins + 1;
        }
        dispatch(editStats({ ...stats, [elementName]: statsElement }));
        dispatch(selectDoor(newSelected));
        dispatch(editGameState("end"));
    };

    return (
        <Container background={true} direction={"column"}>
            <p>At door {notSelected[0].number} you would died</p>
            <p>
                Do you want to change door {selected} to door {notSelected[1].number}?
            </p>
            <Button onClick={() => handleChangeDoor(true)}>Yes</Button>
            <Button onClick={() => handleChangeDoor(false)}>No</Button>
        </Container>
    );
};

export default Modal;
