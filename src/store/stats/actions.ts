import { createAction } from "@reduxjs/toolkit";
import withPayloadType from "../utils/withPayloadType";
import { stats } from "./reducer";

export const setStats = createAction("SET_STATS", withPayloadType<stats>());
