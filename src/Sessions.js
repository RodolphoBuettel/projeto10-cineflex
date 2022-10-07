import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Time from "./Time";


export default function Sessions() {
    const [session, setSession] = useState([]);
    const [miniPoster, setMiniPoster] = useState([]);
    const [title, SetTitle] = useState([]);
    const { filmsId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmsId}/showtimes`);

        promise.then((res) => {
            setMiniPoster(res.data.posterURL);
            SetTitle(res.data.title);
            setSession(res.data.days);
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    return (
        <>
            <ChoiceTheTime>
                <h2>Escolha o horário</h2>
            </ChoiceTheTime>
            <Session>
                {session.map((s) => <Time key={s.id} s={s} />)}
            </Session>
            <Footer>
                <div>
                    <img src={`${miniPoster}`} />
                </div>
                <h3>{title}</h3>
            </Footer>
        </>
    )

}


const Footer = styled.div`
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


const Session = styled.div`
    h3{
        height: 35px;
width: 241px;
left: 24px;
top: 170px;
    }
`

const ChoiceTheTime = styled.div`
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