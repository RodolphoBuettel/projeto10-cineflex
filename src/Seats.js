import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Chair from "./Chair";
import Form from "./Form";

export default function Seats({setToken, nome, setNome, cpf, setCpf, setMovie, movie, setTime, time, setDay, day, array, setArray}) {
    const [chair, setChair] = useState([]);
    const { idSessao } = useParams();
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            setChair(res.data.seats);
            setMovie(res.data.movie);
            setTime(res.data.name);
            setDay(res.data.day.weekday)
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    return (
        <>
            <ChoiceSeats>
                <h2>{`Selecione o(s) assento(s)`}</h2>
            </ChoiceSeats>
            <Chairs>
                {chair.map((c) => <Chair key={c.id} c={c} array={array} setArray={setArray} />)}
            </Chairs>
            <Availability>
                <Select>
                    <div></div>
                    <h4>Selecionado</h4>
                </Select>
                <Available>
                    <div></div>
                    <h4>Disponível</h4>
                </Available>
                <Unavailable>
                    <div></div>
                    <h4>Indisponível</h4>
                </Unavailable>
            </Availability>
            <Form array={array} setArray={setArray} setToken={setToken} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf}/>
           
            <Footer2>
                <div>
                    <img src={`${movie.posterURL}`} />
                </div>
                <Movie>
                <h3>{movie.title}</h3>
                <h3>{day}-{time}</h3>
                </Movie>               
            </Footer2>
        </>
    )
}

const ChoiceSeats = styled.div`
        width: 100%;
height: 110px;
left: 0px;
margin-top: 67px;
padding-top: 50px;
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
}
`
const Chairs = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Select = styled.div`
    div{
        width: 25px;
height: 25px;
left: 78px;
top: 377px;
margin-top:10px;
margin-right: 70px;
margin-left: 50px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
    }
    h4{
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
margin-left: 30px;
color: #4E5A65;
    }
`
const Available = styled.div`
 div{
        width: 25px;
height: 25px;
left: 78px;
top: 377px;
margin-top:10px;
margin-right: 70px;
margin-left: 50px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
    }
    h4{
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
margin-left: 30px;
color: #4E5A65;
    }
`
const Unavailable = styled.div`
     div{
        width: 25px;
height: 25px;
left: 78px;
top: 377px;
margin-top:10px;
margin-right: 70px;
margin-left: 50px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
    }
    h4{
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
margin-left: 30px;
color: #4E5A65;
    }
`
const Availability = styled.div`
    display: flex;
    justify-content: center;
`
const Footer2 = styled.div`
width: 100%;
height: 117px;
display: flex;
margin-top: 15px;
background: #9EADBA;
border: 1px solid #9EADBA;
z-index: 10;
h3{
    margin-left: 20px;
    margin-top: 40px;
}
div{
    width: 64px;
height: 89px;
margin-left: 10px;
margin-top: 14px;

background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
    img{
        width: 48px;
height: 72px;
margin-top:8px;
margin-left:8px;
    }
}
`
const Movie = styled.span`
    h3{
        margin-top: 30px;
        margin-bottom: -20px;
    }
`
