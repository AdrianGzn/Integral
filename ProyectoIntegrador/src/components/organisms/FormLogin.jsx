import { useState} from "react";
import styled from "styled-components";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import "../../data/users"
import Style from "./ForminLogin.module.css"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
import  Users from "../../data/users"

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

function FormLogin() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handlerClick = () => {
        
        let listUsers = Users.getUsers();
        let flag = false;
        let index;
        for (let i = 0; i < listUsers.length; i++) {
           if ( name == listUsers[i].nombre && pass == listUsers[i].contraseña) {
            index = listUsers[i].page
                
                flag = true;
           }
            
        }

        if(flag){
            Swal.fire({
                title: "Sesión iniciada correctamente",
                text: `Puede continuar`,
                icon: "succes"
            });
            navigate(index)
        }else{
            Swal.fire({
                title: "Datos incorrectos",
                text: `Complete los campos de nuevo`,
                icon: "error"
            });     
        }
    }

    return (
    <DivStyled>
     <div id={Style.cal_data}>
        <Field text="Nombre" type="text" placeholder="Nombre" val={name} fnVal={setName}></Field>
        <Field text="Contraseña" type="password" placeholder="Contraseña" val={pass} fnVal={setPass}></Field>        
     </div>
     <div id={Style.cal_button}>
        <Button onClick={handlerClick} text="Iniciar sesión"></Button>        
     </div>
    </DivStyled>
    )
    
}

export default FormLogin;