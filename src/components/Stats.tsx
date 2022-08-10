import React from "react";

import { useAppSelector } from "../hooks/reduxHooks";

import getPercents from "../utils/getPercents";

const Modal: React.FC = () => {
    const { changed, notChanged } = useAppSelector((state) => state.stats);

    return (
        <>
            <div datatype="container">
                <p>Changed: {changed.count}</p>
                <p>
                    Wins: {changed.wins} | {getPercents(changed.wins, changed.count)}%
                </p>
                <p>
                    Deaths: {changed.deaths} | {getPercents(changed.deaths, changed.count)}%
                </p>
            </div>
            <div datatype="container">
                <p>Did not change: {notChanged.count}</p>
                <p>
                    Wins: {notChanged.wins} | {getPercents(notChanged.wins, notChanged.count)}%
                </p>
                <p>
                    Deaths: {notChanged.deaths} | {getPercents(notChanged.deaths, notChanged.count)}%
                </p>
            </div>
        </>
    );
};

export default Modal;
