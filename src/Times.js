import styled from "styled-components";

export default function Hora({h}) {

    return (
        <>
            <Horary><h4>{h.name}</h4></Horary>
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
`