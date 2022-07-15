import React, { useState } from "react";
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

const initialDoors = [1, 2, 3];
const initialModalActive = false;

const App: React.FC = () => {
    const [modalActive, setModalActive] = useState(initialModalActive);
    const [doors, setDoors] = useState(initialDoors);

    const changeModalActive = () => {
        setModalActive(!modalActive);
    };

    return (
        <>
            <GlobalStyles />
            <StyledApp>
                {doors.map((door, doorIndex) => (
                    <Door key={doorIndex} door={door} changeModalActive={changeModalActive} />
                ))}
                {modalActive && <Modal />}
            </StyledApp>
        </>
    );
};

export default App;
