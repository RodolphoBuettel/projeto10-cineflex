import { useState } from "react";
import styled from "styled-components";

export default function Chair({c, array, setArray}){
    const [selectedSeat, setSelectedSeat] = useState(false);
    
    
    function SelectSeat(){
        if(c.isAvailable === false){
        setSelectedSeat(!selectedSeat);
            array.push(Number(c.id));
            console.log(array);
            setArray(array);
            c.isAvailable = true;
        }
    }

   return(
    <>
       <Seat onClick={()=>SelectSeat(c.name, c.id)} c={c.isAvailable} selectedSeat={selectedSeat} n={c.name}><div>{c.name}</div></Seat>
    </>
   ) 
}

const Seat = styled.div`
box-sizing: border-box;
    width: 26px;
height: 26px;
margin-right: 7px;
margin-left: 20px;
margin-bottom: 15px;
text-align: center;
background: ${(prop) => !prop.c ? `#C3CFD9` : `#FBE192`};
${(prop) => prop.selectedSeat ? `background-color: #1AAE9E;` : ``};
border: 1px solid ${(prop) => !prop.c ? `#7B8B99` : `#F7C52B`};
 ${(prop) => prop.selectedSeat ? `border: 1px solid #0E7D71` : ``};
border-radius: 12px;
`