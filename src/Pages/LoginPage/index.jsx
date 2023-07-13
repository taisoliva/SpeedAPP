import * as Styled from "./style.jsx"
import Logo from "../../assets/Logo.jpeg"
import {Link} from "react-router-dom"

export default function Login (){
    return <Styled.Main>
      <img src={Logo}/>

        <Styled.Inputs>
            <Styled.Input placeholder="Email" /> 
            <Styled.Input placeholder="Senha" /> 
            <Styled.Button>
               <p> {"Entrar"} </p>
            </Styled.Button>
        </Styled.Inputs>

        <Link to="/cadastro"> Primeira vez? Cadastre-se </Link>
        <Link to="/estudante"> Tela Estudante </Link>

    </Styled.Main>
}