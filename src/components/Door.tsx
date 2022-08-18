import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { clickDoor } from "../store/doors/actions";
import { suggestChange } from "../store/gameState/actions";

import StyledDoor from "../styles/door";

interface IDoorProps {
    number: number;
}

const Door: React.FC<IDoorProps> = ({ number }) => {
    const dispatch = useAppDispatch();
    const gameState = useAppSelector((state) => state.gameState);
    const { active } = useAppSelector((state) => state.auto);
    const { correct, selected } = useAppSelector((state) => state.doors);

    const text = number === correct ? "win" : "death";
    const doorContent = gameState === "game" ? number : text;
    const doorClicked = gameState === "game" ? true : false;
    const correctDoor = gameState !== "game" && correct === number;
    const selectedDoor = gameState !== "game" && selected === number;
    const autoSelectedDoor = gameState === "game" && active && selected === number;

    const handleSelectDoor = () => {
        dispatch(clickDoor(number));
        dispatch(suggestChange());
    };

    return (
        <StyledDoor
            disabled={active}
            onClick={doorClicked ? handleSelectDoor : () => {}}
            clicked={doorClicked}
            correct={correctDoor}
            selected={autoSelectedDoor || selectedDoor}>
            {doorContent}
        </StyledDoor>
    );
};

export default Door;
