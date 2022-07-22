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
    door: number;
    editDoors: any;
}

const Door: React.FC<IDoorProps> = ({ door, editDoors }) => {
    const handleClickDoor = () => {
        editDoors(door);
    };

    return <StyledDoor onClick={handleClickDoor}>{door}</StyledDoor>;
};

export default Door;
