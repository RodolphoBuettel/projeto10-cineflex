import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import Film from "./Film";

export default function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL);

        promise.then((res) => {
            setFilms(res.data);
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    return (
        <>
            <ChoiceFilms>
                <h2>Selecione o filme</h2>
            </ChoiceFilms>
            <FilmsContent>
                {films.map((f) => <Film data-identifier="movie-outdoor" key={f.id} f={f} />)}
            </FilmsContent>
        </>
    )
}

const FilmsContent = styled.div`
    margin-top: -50px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ChoiceFilms = styled.div`
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