import styled from "styled-components";
import FormRegister from "../components/organisms/FormRegister";

const DivStyled = styled.div`
      width: 100%; 
      height: 100vh; 
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #7CB9E8;
`;

function Register() {
    return (
        <DivStyled>
            <FormRegister></FormRegister>
        </DivStyled>
    )
}

export default Register;