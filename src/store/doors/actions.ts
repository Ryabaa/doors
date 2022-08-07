import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";

export const setSelected = createAction("SET_SELECTED", withPayloadType<number>());
export const setCorrect = createAction("SET_CORRECT", withPayloadType<number>());
