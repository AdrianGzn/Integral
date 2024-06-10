import styled from "styled-components";
import MenuSection from "../components/organisms/MenuSection.jsx";
import { Helmet } from "react-helmet";

const DivStyled = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

function Teacher() {
    return (<>
        <Helmet><title>Teacher</title></Helmet>
        
        <DivStyled>
            <MenuSection option="teacher"></MenuSection>
        </DivStyled>
    </>)
}

export default Teacher;