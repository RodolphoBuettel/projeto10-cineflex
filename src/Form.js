import styled from "styled-components";

export default function Form() {
    return (
        <Dados>
            <Nome>
                <h3>Nome do comprador</h3>
                <input placeholder="Digite seu nome" type="name" required/>
            </Nome>
            <Cpf>
                <h3>CPF do comprador</h3>
                <input placeholder="Digite seu CPF" required/>
            </Cpf>
        </Dados>
    )
}

const Dados = styled.form`
    margin-left: 20px;
`
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