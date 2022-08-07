import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setCorrect } from "../store/doors/actions";

import Container from "../styles/container";

import Door from "./Door";

import getRandomNumber from "../utils/getRandomNumber";

const Game: React.FC = () => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.gameState);
    const doors = useAppSelector((state) => state.doors.numbers);

    useEffect(() => {
        if (gameState === "game") {
            const randomNumber = getRandomNumber(doors.length);
            dispatch(setCorrect(randomNumber));
        }
    }, [gameState]);

    return (
        <Container background={false} direction={"row"}>
            {doors.map((number, doorIndex) => (
                <Door key={doorIndex} number={number} />
            ))}
        </Container>
    );
};

export default Game;
