import styled from "styled-components";
export const StylesText = styled.section`

div{
    width: 100%;
    max-width: 500px;
    margin: 9rem;
    border:1px solid white;
    padding: 22px;
    @media screen and (max-width:376px){
        width: 15rem;
        margin-left: 3.5rem;
    }

}
span{
    color: white;
    padding: -1rem; ;
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
    @media screen and (max-width:376px){
    font-size: 30px;
    padding: 3px;
    line-height: 4rem;
}
}
`;