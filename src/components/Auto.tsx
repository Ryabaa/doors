import React, { useEffect } from "react";
import Toggle from "react-toggle";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { timeDecrement, timeChange, intervalChange, toggleActive, toggleInactive } from "../store/auto/actions";

import "react-toggle/style.css";

const Auto: React.FC = () => {
    const dispatch = useAppDispatch();
    const { time, interval, active, disabled } = useAppSelector((state) => state.auto);

    const handleToggleAuto = () => {
        if (active) {
            dispatch(toggleInactive());
        } else {
            dispatch(toggleActive());
        }
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(timeChange(Number(event.target.value)));
    };

    const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(intervalChange(Number(event.target.value)));
    };

    useEffect(() => {
        if (active) {
            const decrementInterval = setInterval(() => {
                dispatch(timeDecrement());
            }, 1000);
            return () => clearInterval(decrementInterval);
        }
    }, [active]);

    useEffect(() => {
        if (time === 0) {
            dispatch(toggleInactive());
        }
    }, [time]);

    return (
        <div datatype="container">
            <label>
                <span>Auto :</span>
                <Toggle checked={active} disabled={disabled} icons={false} onChange={handleToggleAuto} />
            </label>
            <label>
                <span>Time | s :</span>
                <input type="number" readOnly={active} placeholder="value" onChange={handleTimeChange} value={time !== 0 ? time : ""} />
            </label>
            <label>
                <span>Interval | ms :</span>
                <input
                    type="number"
                    readOnly={active}
                    placeholder="value"
                    onChange={handleIntervalChange}
                    value={interval !== 0 ? interval : ""}
                />
            </label>
        </div>
    );
};

export default Auto;
