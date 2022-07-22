import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    color: #fff;
    background: #00000097;
`;

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000097;
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

const ModalButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
`;

interface IDoorsInfo {
    selected: number | null;
    correct: number;
}

interface IModalProps {
    doorsInfo: IDoorsInfo;
}

const Modal: React.FC<IModalProps> = ({ doorsInfo }) => {
    const { selected, correct } = doorsInfo;

    const handleChangeChoice = (choice: boolean) => {
        if (choice) {
        }
        if (selected !== correct) {
        }
    };

    return (
        <ModalWrapper>
            <StyledModal>
                <p>At door {correct} you would died</p>
                <p>
                    Do you want to change door {selected} to door {correct}?
                </p>
                <ModalButton onClick={() => handleChangeChoice(true)}>Yes</ModalButton>
                <ModalButton onClick={() => handleChangeChoice(false)}>No</ModalButton>
            </StyledModal>
        </ModalWrapper>
    );
};

export default Modal;
