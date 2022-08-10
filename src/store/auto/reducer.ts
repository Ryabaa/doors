import { createReducer } from "@reduxjs/toolkit";
import { amountDecrement, inputChange, toggleActive, toggleInactive } from "./actions";

type auto = {
    amount: number;
    active: boolean;
    disabled: boolean;
};

const initialState: auto = {
    amount: 0,
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
            state.amount = action.payload;
        })
        .addCase(amountDecrement, (state, action) => {
            if (state.amount) {
                state.amount -= 1;
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
