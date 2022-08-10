import styled from "styled-components";

export default styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    & div[datatype="container"] {
        background: #00000022;
        color: #fff;
        font-size: 24px;
        padding: 20px;
        width: 200px;
        border-radius: 20px;
        row-gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &:nth-child(3) {
            grid-column: 2 / 3;
        }
        & label {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 10px;
        }
        & input {
            width: 70px;
            background: none;
            color: #fff;
            font-size: 15px;
            ::-webkit-outer-spin-button,
            ::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
`;
