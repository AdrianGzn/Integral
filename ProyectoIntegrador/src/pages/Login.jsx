import styled from "styled-components";
import FormLogin from "../components/organisms/FormLogin";


const DivStyled = styled.div`
      width: 100%; 
      height: 100vh; 
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #7CB9E8;
`;

function Login() {
    return (
    <DivStyled>
        <FormLogin></FormLogin>
    </DivStyled>
    )
    
}

export default Login;