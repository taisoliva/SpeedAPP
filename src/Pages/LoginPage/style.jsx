import { styled } from "styled-components";

export const Main = styled.div`
    width:100%;
    height:100vh;
    background: linear-gradient(180deg, #f5f09d, #f5e186, #fffbc1);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        height: 200px;
        width: 200px;
    }

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
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

`

export const Input = styled.input`
    width: 180px;
    height: 10px;

    border-radius: 5px;
    border: 1px solid #000;
    background: #F3F3F3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    margin-top: 10px;

   
`

export const Button = styled.button`
    width: 128px;
    height: 50px;
    border: 1px solid #f5f09d;
    background-color: #0a0a06;

    margin-top: 10px;

`