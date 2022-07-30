import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { editGameState } from "../store/gameSlice";

import Container from "../styles/container";
import Button from "../styles/button";
import Description from "../styles/description";

import Door from "./Door";

const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.game.gameState);
    const doors = useAppSelector((state) => state.doors.doorNumbers);
    const { correct, selected } = useAppSelector((state) => state.doors);

    const handleContinue = () => {
        dispatch(editGameState("game"));
    };

    const winDoor = gameState === "game" ? false : selected === correct ? true : false;

    return (
        <Container background={false} direction={"column"}>
            <Description win={winDoor}>You selected {doors[selected! - 1].text} door!</Description>
            <Container background={false} direction={"row"}>
                {doors.map((door, doorIndex) => (
                    <Door key={doorIndex} door={door} />
                ))}
            </Container>
            <Button onClick={handleContinue}>Continue</Button>
        </Container>
    );
};

export default Modal;
