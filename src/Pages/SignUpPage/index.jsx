import * as Styled from "./styled"
import { Link } from "react-router-dom"

export default function SignUp () {
    return (
        <Styled.Main>

            <Styled.Title >
                <h1> {"Rampa School"}</h1>
            </Styled.Title>

            <Styled.Inputs>
                <Styled.Input placeholder="Nome"/>
                <Styled.Input placeholder="Telefone"/>
                <Styled.Input placeholder="Líder de RG"/>
                <Styled.Input placeholder="Email"/>
                <Styled.Input placeholder="Senha"/>
                <Styled.Input placeholder="Confirme sua Senha"/>
            </Styled.Inputs>

            <Styled.Button>
               <p> {"Cadastrar"} </p>
            </Styled.Button>

            <Link to="/"> Já tem Cadastro? Faça Login </Link>

        </Styled.Main>
    )
}