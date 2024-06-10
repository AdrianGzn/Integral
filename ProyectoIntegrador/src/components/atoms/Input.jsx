import styled from "styled-components";

const InputStyled = styled.input`
    width: 75%;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    padding: 0 10px;
`;

function Input(props) {

    const handlerOnChange = (event) => {
        props.fnVal(event.target.value)
    }

    return(
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange}/>
    )
}

export default Input;