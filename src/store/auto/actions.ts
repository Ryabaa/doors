import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";

export const timeChange = createAction("TIME_CHANGE", withPayloadType<number>());
export const intervalChange = createAction("INTERVAL_CHANGE", withPayloadType<number>());
export const timeDecrement = createAction("TIME_DECREMENT");
export const toggleActive = createAction("TOGGLE_ACTIVE");
export const toggleInactive = createAction("TOGGLE_INACTIVE");
