import styled from "styled-components";
import Times from "./Times";

export default function Time({s}) {
    const horas = s.showtimes;
    return (
        <>
            <Day>
                <h3>{s.weekday} {s.date}</h3>
            </Day>
            <Available>
                {horas.map((h)=> <Times data-identifier="hour-minute-btn" key={h.id} h={h} />)}
            </Available>
        </>
    )
}



const Available = styled.div`
    display: flex;
`



const Day = styled.div`
`