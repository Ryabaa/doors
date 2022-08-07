import { createReducer } from "@reduxjs/toolkit";
import { setGameState } from "./actions";

const initialState: string = "intro";

const gameStateReducer = createReducer(initialState, (builder) => {
    builder.addCase(setGameState, (state, action) => {
        return action.payload;
    });
});

export default gameStateReducer;
