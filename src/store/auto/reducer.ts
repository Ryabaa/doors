import { createReducer } from "@reduxjs/toolkit";
import { timeDecrement, timeChange, intervalChange, toggleActive, toggleInactive } from "./actions";

type auto = {
    time: number;
    interval: number;
    active: boolean;
    disabled: boolean;
};

const initialState: auto = {
    time: 0,
    interval: 500,
    active: false,
    disabled: true,
};

const gameStateReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(timeChange, (state, action) => {
            if (action.payload !== 0) {
                state.disabled = false;
            } else {
                state.disabled = true;
            }
            state.time = action.payload;
        })
        .addCase(intervalChange, (state, action) => {
            state.interval = action.payload;
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
