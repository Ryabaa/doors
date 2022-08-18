import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { startGame } from "../store/gameState/actions";

import Container from "../styles/container";
import Button from "../styles/button";

const Intro: React.FC = () => {
    const dispatch = useAppDispatch();
    const doors = useAppSelector((state) => state.doors.numbers);

    const handleStart = () => {
        dispatch(startGame(doors.length));
    };

    return (
        <Container background={true} direction={"column"}>
            <p>3 Doors</p>
            <p>This game tests mathematical paradox</p>
            <Button active={false} onClick={handleStart}>
                Start
            </Button>
        </Container>
    );
};

export default Intro;
