import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type game = {
    gameState: string;
};

const initialState: game = {
    gameState: "intro",
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        editGameState(state, action: PayloadAction<string>) {
            state.gameState = action.payload;
        },
    },
});

export const { editGameState } = gameSlice.actions;

export default gameSlice.reducer;
