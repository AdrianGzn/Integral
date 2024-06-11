import styled from "styled-components"
import { useState, useEffect } from 'react';
import dataFunctions from "../../data/options";
import MenuButton from "../atoms/MenuButton";
import Title from "../atoms/Title";

const DivStyled = styled.div`
    height: 80%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function PanelButton(props) {
    let option = props.option;
    const [options, setOptions] = useState([]);
    const [buttons, setButtons] = useState([]);
    
    useEffect(() =>{
        let aux = [];
        switch(option) {
            case "managemente":
                aux = dataFunctions.getManagement();
                break;
            case "escolarControl":
                aux = dataFunctions.getEscolarControl();
                    break;
            case "resourses":
                aux = dataFunctions.getResourses();
                break;
            case "teacher":
                aux = dataFunctions.getTeacher();
                break;

            default:
                console.log("Error");
        }
    
        setOptions(aux);



    }, [option])

    useEffect(()=>{
        let buttonsAux = [];
        for(let i = options.length - 1; i >= 0; i--) {
            let optionAux = options[i];
            buttonsAux.push(
                <MenuButton
                    key={i}
                    text={optionAux.text}
                    link={optionAux.link}
                ></MenuButton>
            );
        }

        setButtons(buttonsAux);
    }, [options])

    return (<>
        <DivStyled>
            <Title text={props.title}></Title>
            <div>
                {buttons}
            </div>
        </DivStyled>
    </>)
}

export default PanelButton;