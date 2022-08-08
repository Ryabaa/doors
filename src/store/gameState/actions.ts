import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";

export const startGame = createAction("START_GAME", withPayloadType<number>());
export const suggestChange = createAction("SUGGEST_CHANGE");
export const endGame = createAction("END_GAME");
