import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { clickDoor } from "../store/doors/actions";
import { suggestChange } from "../store/gameState/actions";

import Container from "../styles/container";
import getRandomNumber from "../utils/getRandomNumber";

import Door from "./Door";

const Game: React.FC = () => {
    const dispatch = useAppDispatch();
    const doors = useAppSelector((state) => state.doors.numbers);
    const { active } = useAppSelector((state) => state.auto);

    useEffect(() => {
        if (active) {
            const timeout = setTimeout(() => {
                const randomNumber = getRandomNumber(doors.length);
                dispatch(clickDoor(randomNumber));
                dispatch(suggestChange());
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [active]);

    return (
        <Container background={false} direction={"row"}>
            {doors.map((number, doorIndex) => (
                <Door key={doorIndex} number={number} />
            ))}
        </Container>
    );
};

export default Game;
