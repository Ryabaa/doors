import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setGameState } from "../store/gameState/actions";

import Container from "../styles/container";
import Button from "../styles/button";
import Description from "../styles/description";

import Door from "./Door";

const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.gameState);
    const doors = useAppSelector((state) => state.doors.numbers);
    const { correct, selected } = useAppSelector((state) => state.doors);

    const handleContinue = () => {
        dispatch(setGameState("game"));
    };

    const winDoor = gameState === "game" ? false : selected === correct ? true : false;
    const text = doors[selected! - 1] === correct ? "win" : "death";

    return (
        <Container background={false} direction={"column"}>
            <Description win={winDoor}>You selected {text} door!</Description>
            <Container background={false} direction={"row"}>
                {doors.map((number, doorIndex) => (
                    <Door key={doorIndex} number={number} />
                ))}
            </Container>
            <Button onClick={handleContinue}>Continue</Button>
        </Container>
    );
};

export default Modal;
