import React, { useEffect } from "react";
import Toggle from "react-toggle";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { timeDecrement, inputChange, toggleActive, toggleInactive } from "../store/auto/actions";

import "react-toggle/style.css";

const Auto: React.FC = () => {
    const dispatch = useAppDispatch();
    const { time, active, disabled } = useAppSelector((state) => state.auto);

    const handleToggleAuto = () => {
        if (active) {
            dispatch(toggleInactive());
        } else {
            dispatch(toggleActive());
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(inputChange(Number(event.target.value)));
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
                <span>Time :</span>
                <input type="number" readOnly={active} placeholder="seconds" onChange={handleInputChange} value={time !== 0 ? time : ""} />
            </label>
        </div>
    );
};

export default Auto;
