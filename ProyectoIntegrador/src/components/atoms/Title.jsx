import styled from "styled-components";

const PStyled = styled.p`
    font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
    color: white;
`;

function Title(props) {
    return <PStyled>{props.text}</PStyled>
}

export default Title;