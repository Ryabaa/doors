import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";

export const inputChange = createAction("INPUT_CHANGE", withPayloadType<number>());
export const amountDecrement = createAction("AMOUNT_DECREMENT");
export const toggleActive = createAction("TOGGLE_ACTIVE");
export const toggleInactive = createAction("TOGGLE_INACTIVE");
