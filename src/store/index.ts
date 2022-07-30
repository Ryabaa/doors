import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import doorsReducer from "./doorsSlice";
import statsReducer from "./statsSlice";

const store = configureStore({
    reducer: {
        game: gameReducer,
        doors: doorsReducer,
        stats: statsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
