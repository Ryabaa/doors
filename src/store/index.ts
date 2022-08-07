import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameState/reducer";
import statsReducer from "./stats/reducer";
import doorsReducer from "./doors/reducer";

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        stats: statsReducer,
        doors: doorsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
