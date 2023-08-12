import { keyframes, styled, css } from "styled-components";


export const Main = styled.div`
    
    height: 100vh;
    background-color: #FDF6E3;
    display: flex;
    flex-direction: column;
    align-items: center;
   
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


export const ItemClass = styled.div`
    /* background-color: #82E79E; */
    background-color: ${props => props.classDone ? "#82E79E" : "white" };
    width: 250px;
    height: 70px;
    border: 1px solid #000;

    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    z-index: 1;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); 

    p{
        color: #000;
        text-align: center;
        font-family: "Roboto";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        margin-right: 15px;
    }
`
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const ContainerData = styled.div`
    display: ${props => props.closeContainer ? "flex" : "none"}
`

export const Data = styled.div `
    
    width: 250px;
    height: 70px;
    margin-top: -10px;
    margin-bottom: 10px;

    background-color: #f8ebc5;
    

    opacity: 0;
    transform: translateY(${props => props.showData ? '0' : '-100%'});
    animation: ${({ showData }) => showData ? css`${slideIn} 0.5s forwards` : css`${slideDown} 0.5s forwards`};
    
    border: 1px solid black;

    ul{
        display: flex;
        flex-direction: column;
        
    }

    li{
        color: #000;
        text-align: center;
        font-family: "Roboto";
        font-size: 15px;
        font-style: normal;
        line-height: normal;
        padding: 10px;
    }
`

export const Icone = styled.div`
    position: absolute;
    right: 5px;
`

export const Contacts = styled.div`

    display: flex ;
    flex-direction: column;

    a{
        color: #000;
        text-align: center;
        font-family: "Roboto";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: underline;
        margin-bottom: 10px;
    }
    

    div {
        display: flex;
        align-items: center;

        p{
            color: #000;
            text-align: center;
            font-family: "Roboto";
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            text-decoration: underline;
        }

    }
`