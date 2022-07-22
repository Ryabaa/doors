import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./styles/global";
import Door from "./components/Door";
import Modal from "./components/Modal";

import { getRandom, getRandoms } from "./utils/getRandom";

const StyledApp = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    background: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%), no-repeat;
`;

interface IDoorsInfo {
    selected: number | null;
    correct: number;
}

const initialModalActive = false;
const initialDoors = [1, 2, 3];
const initialDoorsInfo = {
    selected: null,
    correct: getRandom(initialDoors.length),
};

const App: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(initialModalActive);
    const [doorsInfo, setDoorsInfo] = useState<IDoorsInfo>(initialDoorsInfo);
    const [doors, setDoors] = useState<number[]>(initialDoors);
    const [offerDoor, setOfferDoors] = useState<number>(getRandoms(doors.length, [doorsInfo.correct]));

    const editDoors = (selectedDoor: number) => {
        setDoorsInfo({ ...doorsInfo, selected: selectedDoor });
        setModalActive(true);
    };

    const updateApp = () => {
        setModalActive(false);
    };

    /*     useEffect(() => {
        console.log(1);
    }, []); */

    return (
        <>
            <GlobalStyles />
            <StyledApp>
                {doors.map((door, doorIndex) => (
                    <Door key={doorIndex} door={door} editDoors={editDoors} />
                ))}
                {modalActive && <Modal doorsInfo={doorsInfo} />}
            </StyledApp>
        </>
    );
};

export default App;
