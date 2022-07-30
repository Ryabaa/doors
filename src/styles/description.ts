import styled from "styled-components";

interface IDescription {
    win: boolean;
}

export default styled.div<IDescription>`
    color: ${(props) => (props.win ? "#62a344" : "#d86565")};
    border-radius: 20px;
    padding: 5px 25px;
    font-size: 30px;
`;
