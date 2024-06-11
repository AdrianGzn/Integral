import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: #6d6d6d;
    padding: 15px 20px;
    outline: none;
    color: #eee;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease-out;
    width: 100%;
    margin: 4%;

    &:hover {
        transform: translateY(-3px);
    }

    &:span {
        color: #aaa;
    }
`;

function MenuButton(props) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(props.link)
    }

    return <ButtonStyled onClick={handleClick}>{props.text}</ButtonStyled>
}

export default MenuButton;