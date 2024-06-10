import styled from "styled-components";
import MenuSection from "../components/organisms/MenuSection.jsx";
import { Helmet } from "react-helmet";

const DivStyled = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`

function Home() {
    return (<>
        <Helmet><title>Home</title></Helmet>
        
        <DivStyled>
            <MenuSection option="escolarControl"></MenuSection>
        </DivStyled>
    </>)
}

export default Home;