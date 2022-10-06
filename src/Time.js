import styled from "styled-components";
import Times from "./Times";

export default function Time({s}) {
    console.log(s);
    const horas = s.showtimes;
    return (
        <>
            <Day>
                <h3>{s.weekday} {s.date}</h3>
            </Day>
            <Available>
                {horas.map((h)=> <Times key={h.id} h={h}/>)}
            </Available>
        </>
    )
}



const Available = styled.div`
    display: flex;
`



const Day = styled.div`
`