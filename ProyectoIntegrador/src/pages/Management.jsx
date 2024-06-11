import styled from "styled-components";
import MenuSection from "../components/organisms/MenuSection.jsx";
import { Helmet } from "react-helmet";

const DivStyled = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

function Management() {
    return (<>
        <Helmet><title>Management</title></Helmet>
        
        <DivStyled>
            <MenuSection option="managemente" title="Dirección"></MenuSection>
        </DivStyled>
    </>)
}

export default Management;