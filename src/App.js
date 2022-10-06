import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Films from "./Films";
import Sessions from "./Sessions";

export default function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header>
                    <h1>CINEFLEX</h1>
                </Header>
                <Routes>
                    <Route path="/" element={<Films />}/>
                    <Route path="/films/:filmsId" element={<Sessions/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}


const Header = styled.div`
    width: 100%;
    height: 67px;
    left: 0px;
    margin-top: -10px;
    background: #C3CFD9;
    box-sizing: border-box;
    padding-bottom: 10px;
    
    /* position: fixed; */
    h1{
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
        color: #E8833A;
        font-family: 'Roboto';
        font-style: normal;
        display: flex;
        align-items: center;
        justify-content: center;
     
    }
`



const Container = styled.div`
    
`



