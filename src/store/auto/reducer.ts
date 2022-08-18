import { createReducer } from "@reduxjs/toolkit";
import { timeDecrement, inputChange, toggleActive, toggleInactive } from "./actions";

type auto = {
    time: number;
    active: boolean;
    disabled: boolean;
};

const initialState: auto = {
    time: 0,
    active: false,
    disabled: true,
};

const gameStateReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(inputChange, (state, action) => {
            if (action.payload !== 0) {
                state.disabled = false;
            } else {
                state.disabled = true;
            }
            state.time = action.payload;
        })
        .addCase(timeDecrement, (state, action) => {
            if (state.time) {
                state.time -= 1;
            }
        })
        .addCase(toggleActive, (state, action) => {
            state.active = true;
        })
        .addCase(toggleInactive, (state, action) => {
            state.active = false;
        });
});

export default gameStateReducer;
