import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCorrectDoor } from "../store/doorsSlice";

import Container from "../styles/container";

import Door from "./Door";
import getRandomNumber from "../utils/getRandomNumber";

const Game: React.FC = () => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.game.gameState);
    const doors = useAppSelector((state) => state.doors.doorNumbers);

    useEffect(() => {
        if (gameState === "game") {
            const randomNumber = getRandomNumber(doors.length);
            dispatch(getCorrectDoor(randomNumber));
        }
    }, [gameState]);

    return (
        <Container background={false} direction={"row"}>
            {doors.map((door, doorIndex) => (
                <Door key={doorIndex} door={door} />
            ))}
        </Container>
    );
};

export default Game;
