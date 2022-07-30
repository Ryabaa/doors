import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { selectDoor } from "../store/doorsSlice";
import { editGameState } from "../store/gameSlice";

import StyledDoor from "../styles/door";

interface IDoorProps {
    door: {
        number: number;
        text: string;
    };
}

const Door: React.FC<IDoorProps> = ({ door }) => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.game.gameState);
    const { correct, selected } = useAppSelector((state) => state.doors);

    const { number, text } = door;

    const handleSelectDoor = () => {
        dispatch(selectDoor(number));
        dispatch(editGameState("question"));
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
