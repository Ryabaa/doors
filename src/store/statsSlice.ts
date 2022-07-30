import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type statsElement = {
    count: number;
    deaths: number;
    wins: number;
};

type stats = {
    changed: statsElement;
    notChanged: statsElement;
};

const initialState: stats = {
    changed: {
        count: 0,
        deaths: 0,
        wins: 0,
    },
    notChanged: {
        count: 0,
        deaths: 0,
        wins: 0,
    },
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        editStats(state, action: PayloadAction<stats>) {
            return action.payload;
        },
    },
});

export const { editStats } = statsSlice.actions;

export default statsSlice.reducer;
