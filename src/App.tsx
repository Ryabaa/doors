import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./styles/global";
import Door from "./components/Door";
import Modal from "./components/Modal";

const StyledApp = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    background: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%), no-repeat;
`;

interface IDoors {
    id: number;
    deadly: boolean;
    [key: string]: any;
}

const initialModalActive = false;
const initialCorrectDoor = null;
const initialDoors = [
    { id: 1, deadly: false },
    { id: 2, deadly: false },
    { id: 3, deadly: false },
];

const App: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(initialModalActive);
    const [doors, setDoors] = useState<IDoors[]>(initialDoors);

    const openModal = (openedDoorId: number) => {
        console.log(openedDoorId);
    };

    const updateApp = () => {
        setModalActive(false);
    };

    useEffect(() => {
        console.log(1);
    }, []);

    return (
        <>
            <GlobalStyles />
            <StyledApp>
                {doors.map((door, doorIndex) => (
                    <Door key={doorIndex} door={door} openModal={openModal} />
                ))}
                {modalActive && <Modal doors={doors} />}
            </StyledApp>
        </>
    );
};

export default App;
