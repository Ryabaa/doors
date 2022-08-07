import { createReducer } from "@reduxjs/toolkit";
import { setCorrect, setSelected } from "./actions";

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
        .addCase(setSelected, (state, action) => {
            state.selected = action.payload;
        })
        .addCase(setCorrect, (state, action) => {
            state.correct = action.payload;
        });
});

export default gameStateReducer;
