import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { endGame } from "../store/gameState/actions";
import { changeDoor } from "../store/doors/actions";

import Container from "../styles/container";
import Button from "../styles/button";

import shuffleArray from "../utils/shuffleArray";
import isEven from "../utils/isEven";

const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const stats = useAppSelector((state) => state.stats);
    const doors = useAppSelector((state) => state.doors.numbers);
    const { selected, correct } = useAppSelector((state) => state.doors);
    const { time, interval, active } = useAppSelector((state) => state.auto);
    const [autoChoice, setAutoChoice] = useState(isEven(time));
    const [shuffleDoors, setShuffleDoors] = useState(shuffleArray([...doors]));
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

    useEffect(() => {
        if (active) {
            const timeout = setTimeout(() => {
                handleChangeDoor(autoChoice);
            }, interval);
            return () => clearTimeout(timeout);
        }
    }, [active]);

    return (
        <Container background={true} direction={"column"}>
            <p>At door {deathDoor} you would have died</p>
            <p>
                Do you want to change door {selected} to door {suggestedDoor}?
            </p>
            <Button disabled={active} active={active && autoChoice} onClick={() => handleChangeDoor(true)}>
                Yes
            </Button>
            <Button disabled={active} active={active && !autoChoice} onClick={() => handleChangeDoor(false)}>
                No
            </Button>
        </Container>
    );
};

export default Modal;
