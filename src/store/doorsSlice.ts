import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type door = {
    number: number;
    text: string;
};

type doors = {
    doorNumbers: door[];
    selected: number | null;
    correct: number | null;
};

const initialState: doors = {
    doorNumbers: [
        { number: 1, text: "" },
        { number: 2, text: "" },
        { number: 3, text: "" },
    ],
    selected: null,
    correct: null,
};

const doorSlice = createSlice({
    name: "doors",
    initialState,
    reducers: {
        getCorrectDoor(state, action: PayloadAction<number>) {
            state.correct = action.payload;
            state.doorNumbers = state.doorNumbers.map((door) => {
                if (door.number === action.payload) {
                    return { ...door, text: "win" };
                }
                return { ...door, text: "death" };
            });
        },
        selectDoor(state, action: PayloadAction<number | null>) {
            state.selected = action.payload;
        },
    },
});

export const { getCorrectDoor, selectDoor } = doorSlice.actions;

export default doorSlice.reducer;
