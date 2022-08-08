import { createReducer } from "@reduxjs/toolkit";
import { endGame, startGame, suggestChange } from "./actions";

const initialState: string = "intro";

const gameStateReducer = createReducer(initialState, (builder) => {
    builder.addCase(startGame, (state, action) => {
        return "game";
    });
    builder.addCase(suggestChange, (state, action) => {
        return "suggestion";
    });
    builder.addCase(endGame, (state, action) => {
        return "end";
    });
});

export default gameStateReducer;
