import { createReducer } from "@reduxjs/toolkit";
import { setStats } from "./actions";

type statsElement = {
    count: number;
    deaths: number;
    wins: number;
};

export type stats = {
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

const statsReducer = createReducer(initialState, (builder) => {
    builder.addCase(setStats, (state, action) => {
        return action.payload;
    });
});

export default statsReducer;
