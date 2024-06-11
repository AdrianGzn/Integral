import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: #007FFF;
    padding: 15px 20px;
    outline: none;
    color: #eee;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease-out;
    width: 100%;
    margin: 5px;

    &:hover {
        transform: translateY(-3px);
    }

    &:span {
        color: #aaa;
    }
`;

function Button(props) {
    return <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
}

export default Button;