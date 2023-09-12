import { styled } from "styled-components";

export const Main = styled.div`
    
    height: 100vh;
    background-color: #FDF6E3;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`

export const Menu = styled.div`
    background: linear-gradient(180deg, #f5f09d, #f5e186, #fffbc1);
    height: 100px;
    width: 100%;
   
    margin-bottom: 5%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); 

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
   
    p{
        color: #E4A501;
        font-family: "Roboto";
        font-size: 60px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: black;

        margin-right: 40px;
    }
`

export const User = styled.div`
    h1{
        color: #000;
        text-align: center;
        font-family: "Roboto";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    margin-bottom: 20px;
`
export const ContainerSelect = styled.div`
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); 
    background-color: white;
`