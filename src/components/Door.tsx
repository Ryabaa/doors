import React from "react";
import styled from "styled-components";

const StyledDoor = styled.button`
    background: #00012ff;
    width: 100px;
    height: 250px;
    font-size: 25px;
    cursor: pointer;
`;

interface IDoorProps {
    door: {
        id: number;
        deadly: boolean;
    };
    openModal: any;
}

const Door: React.FC<IDoorProps> = ({ door, openModal }) => {
    const handleClickDoor = () => {
        openModal(door.id);
    };

    return <StyledDoor onClick={handleClickDoor}>{door.id}</StyledDoor>;
};

export default Door;
