import react, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Films from "./Films";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

export default function App() {
    const [token, setToken] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [movie, setMovie] = useState([])
    const [time, setTime] = useState([]);
    const [day, setDay] = useState([]);
    const [session, setSession] = useState([]);
    const [array, setArray] = useState([]);
    const [arr, setArr] = useState([]);
    
    return (
        <BrowserRouter>
            <Container>
                <Header>
                    <h1>CINEFLEX</h1>
                </Header>
                <Routes>
                    <Route path="/" element={<Films />}/>
                    <Route path="/films/:filmsId" element={<Sessions setSession={setSession} session={session}/>}/>
                    <Route path="/assentos/:idSessao" element={<Seats array={array} setArray={setArray} setToken={setToken}  nome={nome} 
                    setNome={setNome} cpf={cpf} setCpf={setCpf} movie={movie} setMovie={setMovie} time={time} 
                    setTime={setTime} setDay={setDay} day={day} setArr={setArr} arr={arr}/>}/>
                    <Route path="/success" element={<Success nome={nome} session={session} 
                    cpf={cpf} movie={movie} time={time} day={day} arr={arr}/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}


const Header = styled.div`
    width: 100%;
    height: 67px;
    left: 0px;
    margin-top: -75px;
    background: #C3CFD9;
    box-sizing: border-box;
    padding-bottom: 10px;
    
    position: fixed;
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
    font-family: 'Roboto', sans-serif;
`



