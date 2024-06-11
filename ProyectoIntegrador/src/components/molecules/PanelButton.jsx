import styled from "styled-components"
import { useState } from 'react';
import Option from "../../data/options";
import MenuButton from "../atoms/MenuButton";

const DivStyled = styled.div`

`;

function PanelButton(props) {
    let option = props.option;
    const [options, setOptions] = useState([]);
    
    if(true){
        switch(option) {
            case "managemente":
                setOptions([...options, {title: "hola", hola:"hi"}]);
                break;

            default:
                console.log("Error");
        }

        let buttons = [];
        for(let i = options.length - 1; i >= 0; i--) {
            let optionAux = options[i];
            buttons.push(
                <MenuButton
                    text={optionAux.text}
                    link={optionAux.link}
                ></MenuButton>
            );
        }

        setOptions(buttons);
    }

    return (<>
        <DivStyled>
            <div>
                {options}
            </div>
        </DivStyled>
    </>)
}

export default PanelButton