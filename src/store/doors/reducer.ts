import { createReducer } from "@reduxjs/toolkit";
import { startGame } from "../gameState/actions";
import { changeDoor, clickDoor } from "./actions";

import getRandomNumber from "../../utils/getRandomNumber";

type doors = {
    numbers: number[];
    selected: number | null;
    correct: number | null;
};

const initialState: doors = {
    numbers: [1, 2, 3],
    selected: null,
    correct: null,
};

const gameStateReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(clickDoor, (state, action) => {
            state.selected = action.payload;
        })
        .addCase(changeDoor, (state, action) => {
            state.selected = action.payload.selected;
        })
        .addCase(startGame, (state, action) => {
            state.correct = getRandomNumber(action.payload);
        });
});

export default gameStateReducer;
