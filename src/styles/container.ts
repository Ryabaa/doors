import styled from "styled-components";

interface IContainer {
    background: boolean;
    direction: string;
}

export default styled.div<IContainer>`
    padding: 20px 50px;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    text-align: center;
    color: #fff;
    background: ${(props) => (props.background ? "#00000097" : "none")};
    border-radius: 20px;
`;
