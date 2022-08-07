import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";

export const setGameState = createAction("SET_GAME_STATE", withPayloadType<string>());
