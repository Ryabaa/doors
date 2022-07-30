import styled from "styled-components";

interface IButton {
    clicked: boolean;
    correct: boolean;
    selected: boolean;
}

export default styled.button<IButton>`
    background: ${(props) => (props.correct ? "#8bb9ff71" : "#00000097")};
    border: 3px solid ${(props) => (props.selected ? "#fff" : "unset")};
    color: #fff;
    width: 100px;
    height: 250px;
    font-size: 24px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        border: 3px solid ${(props) => (props.clicked ? "#fff" : "unset")};
    }
`;
