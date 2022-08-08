import React from "react";

import { useAppSelector } from "../hooks/reduxHooks";

import Container from "../styles/container";

import Door from "./Door";

const Game: React.FC = () => {
    const doors = useAppSelector((state) => state.doors.numbers);

    return (
        <Container background={false} direction={"row"}>
            {doors.map((number, doorIndex) => (
                <Door key={doorIndex} number={number} />
            ))}
        </Container>
    );
};

export default Game;
