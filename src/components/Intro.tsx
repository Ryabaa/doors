import React from "react";

import { useAppDispatch } from "../hooks/reduxHooks";
import { editGameState } from "../store/gameSlice";

import Container from "../styles/container";
import Button from "../styles/button";

const Intro: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleStart = () => {
        dispatch(editGameState("game"));
    };

    return (
        <Container background={true} direction={"column"}>
            <p>3 Doors</p>
            <p>This game tests mathematical paradox</p>
            <Button onClick={handleStart}>Start</Button>
        </Container>
    );
};

export default Intro;
