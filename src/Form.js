import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function Form({ array, nome, setNome, cpf, setCpf }) {

    // const [disable, setDisable] = useState(true);
    const navigate = useNavigate();

    function Validate(e) {
        e.preventDefault();
        console.log(e);
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

        const form = {
            ids: array,
            name: nome,
            cpf: cpf
        }
        console.log(form);
        const promise = axios.post(URL, form);

        promise.then((res) => {
            console.log(res.data);
            navigate("/success");
        })

        promise.catch((err) => console.log(err.response.data));
    }

    return (
        <form onSubmit={Validate} >
            <Nome>
                <label forhtml="nome"><h3>Nome do Comprador:</h3></label>
                <input ata-identifier="buyer-name-input"
                    id="nome"
                    type="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome..."
                    required />
            </Nome>
            <Cpf>
                <label forhtml="cpf"><h3>CPF do Comprador:</h3></label>
                <input data-identifier="buyer-cpf-input"
                     id="cpf"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..."
                    required />
            </Cpf>

            <Button data-identifier="reservation-btn" type="submit">{`Reservar assento(s)`}</Button>

        </form>
    )
}

const Button = styled.button`
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

// const Dados = styled.form`
//     margin-left: 20px;
// `
const Nome = styled.div`
     input{
        width: 327px;
height: 51px;
left: 24px;
top: 497px;
margin-top: -10px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
    }
`
const Cpf = styled.div`
 input{
width: 327px;
height: 51px;
left: 24px;
top: 497px;
margin-top: -10px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
}
`