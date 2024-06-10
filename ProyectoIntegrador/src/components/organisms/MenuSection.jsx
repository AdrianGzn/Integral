import styled from "styled-components";
import PanelButton from "../molecules/PanelButton"

const DivStyled = styled.div`
    width: 30%;
    height: 100vh;
    background-color: #3f3f3f;
    display: flex;
    justify-content: center;
    align-items: center;
`

function MenuSection(props) {
    return (<>
        <DivStyled>
            <PanelButton option={props.option}></PanelButton>
        </DivStyled>
    </>)
}

export default MenuSection;