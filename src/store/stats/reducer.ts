import { createReducer } from "@reduxjs/toolkit";
import { changeDoor } from "../doors/actions";

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
    builder.addCase(changeDoor, (state, action) => {
        return action.payload.stats;
    });
});

export default statsReducer;
