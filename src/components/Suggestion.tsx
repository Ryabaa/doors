import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { endGame } from "../store/gameState/actions";
import { changeDoor } from "../store/doors/actions";

import Container from "../styles/container";
import Button from "../styles/button";
import shuffleArray from "../utils/shuffleArray";

const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const stats = useAppSelector((state) => state.stats);
    const doors = useAppSelector((state) => state.doors.numbers);
    const { selected, correct } = useAppSelector((state) => state.doors);

    const shuffleDoors = shuffleArray([...doors]);
    const deathDoor = shuffleDoors.find((number) => number !== selected && number !== correct);
    const suggestedDoor = shuffleDoors.find((number) => number !== selected && number !== deathDoor);

    const handleChangeDoor = (choice: boolean) => {
        const newSelected = choice ? suggestedDoor : selected;
        const elementName = choice ? "changed" : "notChanged";
        const statsElement = { ...stats[elementName], count: stats[elementName].count + 1 };
        if (newSelected !== correct) {
            statsElement.deaths = statsElement.deaths + 1;
        } else {
            statsElement.wins = statsElement.wins + 1;
        }
        const newStats = { ...stats, [elementName]: statsElement };
        dispatch(changeDoor({ stats: newStats, selected: newSelected }));
        dispatch(endGame());
    };

    return (
        <Container background={true} direction={"column"}>
            <p>At door {deathDoor} you would have died</p>
            <p>
                Do you want to change door {selected} to door {suggestedDoor}?
            </p>
            <Button onClick={() => handleChangeDoor(true)}>Yes</Button>
            <Button onClick={() => handleChangeDoor(false)}>No</Button>
        </Container>
    );
};

export default Modal;
