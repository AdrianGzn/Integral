import { useState } from "react";
import styled from "styled-components";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import "../../data/users"

const DivStyled = styled.div`
    background-color: black;
    width: 40%;
`;

function FormLogin() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handlerClick = (event) => {
        const navigate = useNavigate()
        let listUsers = getUsers();
        let flag = false;

        for (let i = 0; i < listUsers.length; i++) {
           if ( nombre = listUsers[i].nombre && contraseña == listUsers[i].contraseña) {
                flag = true;
           }
            
        }

        if(flag){
            Swal.fire({
                title: "Sesión iniciada correctamente",
                text: `Puede continuar`
            });
        }else{
            Swal.fire({
                title: "Datos incorrectos",
                text: `Complete los campos de nuevo`
            });

            navigate("/home");
        }
    }

    return <DivStyled>
        <Field text="Nombre" type="text" placeholder="Nombre" val={name} fnVal={setName}></Field>
        <Field text="Contraseña" type="password" placeholder="Contraseña" val={pass} fnVal={setPass}></Field>
        <Button onClick={handlerClick} text="Iniciar sesión"></Button>
    </DivStyled>;
}

export default FormLogin;