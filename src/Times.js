import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Hora({h}) {
    return (
        <>
            <Horary><Link to={`/assentos/${h.id}`}><h4>{h.name}</h4></Link></Horary>
        </>
    )

}

const Horary = styled.div`
width: 83px;
height: 43px;
left: 114px;
top: 227px;
background: #E8833A;
border-radius: 3px;
margin-right: 10px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
color: white;
h4{
    text-decoration-color: #e8833a;
    text-decoration-style: none;
    color:white;
}
`