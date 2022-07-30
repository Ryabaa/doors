import React from "react";

import { useAppSelector } from "../hooks/reduxHooks";

import StatsContainer from "../styles/statsContainer";
import Container from "../styles/container";

const Modal: React.FC = () => {
    const { changed, notChanged } = useAppSelector((state) => state.stats);

    return (
        <Container background={false} direction={"row"}>
            <StatsContainer>
                <p>Changed: {changed.count}</p>
                <p>Wins: {changed.wins}</p>
                <p>Deaths: {changed.deaths} </p>
            </StatsContainer>
            <StatsContainer>
                <p>Did not change: {notChanged.count}</p>
                <p>Wins: {notChanged.wins}</p>
                <p>Deaths: {notChanged.deaths} </p>
            </StatsContainer>
        </Container>
    );
};

export default Modal;
