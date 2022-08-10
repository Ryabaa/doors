import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./gameState/reducer";
import statsReducer from "./stats/reducer";
import doorsReducer from "./doors/reducer";
import autoReducer from "./auto/reducer";

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        stats: statsReducer,
        doors: doorsReducer,
        auto: autoReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
