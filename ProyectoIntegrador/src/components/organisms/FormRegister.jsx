import { useState} from "react";
import styled from "styled-components";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import "../../data/users"
import Style from "./ForminLogin.module.css"
import Data from "../../data/users"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';

const DivStyled = styled.div`
    border-radius: 10px; 
    width: 25%;
    background-color: white;
    height: 500px; 
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    &:hover {
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    }

`;

function FormRegister() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handlerClick = () => {
        if(!name || !pass) {
            Swal.fire({
                title: "Register",
                text: "the form is blank",
                icon: "error"
            })
        }else {
            Data.addUsers(name, pass)
            Swal.fire({
                title: "Sesión iniciada correctamente",
                text: `Puede continuar`,
                icon: "success"
            });
            navigate("/home");    
        }
    }

    return (
    <DivStyled>
     <div id={Style.cal_data}>
        <Field text="Nombre" type="text" placeholder="Nombre" val={name} fnVal={setName}></Field>
        <Field text="Contraseña" type="password" placeholder="Contraseña" val={pass} fnVal={setPass}></Field>        
     </div>
     <div id={Style.cal_button}>
        <Button onClick={handlerClick} text="Registrarse"></Button>        
     </div>
    </DivStyled>
    )
    
}

export default FormRegister;