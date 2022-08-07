import React from "react";

import { useAppSelector } from "../hooks/reduxHooks";

import StatsContainer from "../styles/statsContainer";
import Container from "../styles/container";

import getPercents from "../utils/getPercents";

const Modal: React.FC = () => {
    const { changed, notChanged } = useAppSelector((state) => state.stats);

    return (
        <Container background={false} direction={"row"}>
            <StatsContainer>
                <p>Changed: {changed.count}</p>
                <p>
                    Wins: {changed.wins} | {getPercents(changed.wins, changed.count)}%
                </p>
                <p>
                    Deaths: {changed.deaths} | {getPercents(changed.deaths, changed.count)}%
                </p>
            </StatsContainer>
            <StatsContainer>
                <p>Did not change: {notChanged.count}</p>
                <p>
                    Wins: {notChanged.wins} | {getPercents(notChanged.wins, notChanged.count)}%
                </p>
                <p>
                    Deaths: {notChanged.deaths} | {getPercents(notChanged.deaths, notChanged.count)}%
                </p>
            </StatsContainer>
        </Container>
    );
};

export default Modal;
