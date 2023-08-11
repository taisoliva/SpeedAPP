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
        width: 230px;
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
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

`



