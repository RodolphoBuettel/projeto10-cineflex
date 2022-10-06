import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Film({f}){
    return(
        <FilmContent>
            <Link to={`/films/${f.id}`}>
            <img src={f.posterURL}/>
            </Link>
        </FilmContent>
    )

}



const FilmContent = styled.div`
    height: 209px;
width: 145px;
left: 30px;
margin-top: 20px;
margin-right: 20px;
top: 169px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
img{
    margin-top:8px;
    margin-left: 8px;
    width: 129px;
height: 193px;
left: 213px;
top: 177px;
}
`