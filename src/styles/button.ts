import styled from "styled-components";

interface IButton {
    active: boolean;
}

export default styled.button<IButton>`
    border: 3px solid ${(props) => (props.active ? "#fff" : "unset")};
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: max-content;
    height: 30px;
    border-radius: 20px;
    font-size: 18px;
    background-color: #8bb9ff71;
    color: #fff;
    padding: 20px 20px;
`;
