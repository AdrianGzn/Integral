import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.button`

`;

function MenuButton(props) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(props.link)
    }

    return <ButtonStyled onClick={handleClick}>{props.text}</ButtonStyled>
}

export default MenuButton;