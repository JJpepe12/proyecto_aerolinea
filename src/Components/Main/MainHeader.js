import React from "react";
import { Container } from "./StylesMainHeader";
import { agents } from "../../data/Data";
import Cards from "../Cards/Cards";


const MainHeader= () =>{
return (
    <Container>
        <div className="cards_button">
            <h1> OUR CREATIONS </h1>
            <div className="cardbutton">
            <button> 
            SEE ALL
            </button> <br/>
            </div>
        </div>
        <section>{agents.map((agent)=><Cards key={ agent.id} agent={agent}/>)}</section>    
    </Container>
);
};
export default MainHeader;
