import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";

export default function Success({nome, cpf, movie, time, day, arr, session}) {
    
   
    const navigate = useNavigate();

    function Back(){
        navigate("/");
    }

    return (
        <>
        <Confirmed>
            <h2>Pedido feito com sucesso</h2>
        </Confirmed>
        <FilmAndSession>
            <h3 data-identifier="movie-session-infos-reserve-finished" >Filme e sessão</h3>
            <p>{movie.title}</p>
            <p>{day} {time}</p>
            <h3>Assentos</h3>
            {arr.map((a, index)=> <Assento data-identifier="seat-infos-reserve-finished" key={index} a={a}/>)}
            <h3 data-identifier="buyer-infos-reserve-finished">Comprador</h3>
            <p>Nome: {nome}</p>
            <p>CPF: {cpf}</p>
        </FilmAndSession>
        <Button data-identifier="back-to-home-btn" onClick={Back}>Voltar pra home</Button>
        </>
    )
}


const Button = styled.div`
    width: 225px;
height: 42px;
margin-left: 72px;
margin-top: 50px;
margin-bottom: 30px;
background: #E8833A;
border-radius: 3px;
color: white;
text-align: center;
box-sizing: border-box;
padding-top: 10px;
`

const Confirmed = styled.div`
width: 100%;
height: 110px;
margin-left: 0px;
margin-top: 67px;
padding-top: 50px;
display: flex;
justify-content: center;
    h2{
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #247A6B;
    }
`
const FilmAndSession = styled.div`
    h3{
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
    }
    p{
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;

    }
`