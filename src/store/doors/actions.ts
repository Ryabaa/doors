import { createAction } from "@reduxjs/toolkit";
import { stats } from "../stats/reducer";
import withPayloadType from "../utils/withPayloadType";

type payloadType = {
    stats: stats;
    selected: number;
};

export const clickDoor = createAction("CLICK_DOOR", withPayloadType<number>());
export const changeDoor = createAction("CHANGE_DOOR", withPayloadType<payloadType>());
export const setCorrect = createAction("SET_CORRECT", withPayloadType<number>());
