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

interface IDoors {
    id: number;
    deadly: boolean;
    [key: string]: any;
}

interface IModalProps {
    doors: IDoors[];
}

const Modal: React.FC<IModalProps> = ({ doors }) => {
    return (
        <ModalWrapper>
            <StyledModal>
                <p>At door {3} you would died</p>
                <p>
                    Do you want to change door {2} to door {1}?
                </p>
                <ModalButton>Yes</ModalButton>
                <ModalButton>No</ModalButton>
            </StyledModal>
        </ModalWrapper>
    );
};

export default Modal;
