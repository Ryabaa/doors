import React, { useEffect } from "react";
import Toggle from "react-toggle";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { amountDecrement, inputChange, toggleActive, toggleInactive } from "../store/auto/actions";

import "react-toggle/style.css";

const Auto: React.FC = () => {
    const dispatch = useAppDispatch();
    const { amount, active, disabled } = useAppSelector((state) => state.auto);

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
                dispatch(amountDecrement());
            }, 1000);
            return () => {
                clearInterval(decrementInterval);
            };
        }
    }, [active]);

    useEffect(() => {
        if (amount === 0) {
            dispatch(toggleInactive());
        }
    }, [amount]);

    return (
        <div datatype="container">
            <label>
                <span>Auto :</span>
                <Toggle checked={active} disabled={disabled} icons={false} onChange={handleToggleAuto} />
            </label>
            <label>
                <span>Amount :</span>
                <input
                    type="number"
                    readOnly={active}
                    placeholder="number"
                    onChange={handleInputChange}
                    value={amount !== 0 ? amount : ""}
                />
            </label>
        </div>
    );
};

export default Auto;
