import React from "react";
import styled from "styled-components";

interface IDoorProps {
    door: number;
    changeModalActive: () => void;
}

const StyledDoor = styled.button`
    background: #00012ff;
    width: 100px;
    height: 250px;
    font-size: 25px;
    cursor: pointer;
`;

const Door: React.FC<IDoorProps> = ({ door, changeModalActive }) => {
    const handleClickDoor = () => {
        console.log(door);
        changeModalActive();
    };

    return <StyledDoor onClick={handleClickDoor}>{door}</StyledDoor>;
};

export default Door;
