import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSelected } from "../store/doors/actions";
import { setGameState } from "../store/gameState/actions";

import StyledDoor from "../styles/door";

interface IDoorProps {
    number: number;
}

const Door: React.FC<IDoorProps> = ({ number }) => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.gameState);
    const { correct, selected } = useAppSelector((state) => state.doors);
    const text = number === correct ? "win" : "death";

    const handleSelectDoor = () => {
        dispatch(setSelected(number));
        dispatch(setGameState("suggestion"));
    };

    const doorClicked = gameState === "game" ? true : false;
    const correctDoor = gameState === "game" ? false : correct === number ? true : false;
    const selectedDoor = gameState === "game" ? false : selected === number ? true : false;
    const doorContent = gameState === "game" ? number : text;

    return (
        <StyledDoor onClick={doorClicked ? handleSelectDoor : () => {}} clicked={doorClicked} correct={correctDoor} selected={selectedDoor}>
            {doorContent}
        </StyledDoor>
    );
};

export default Door;
