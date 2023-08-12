import * as Styled from "./style.jsx"
import Logo from "../../assets/Logo.jpeg"
import { Link, useNavigate } from "react-router-dom"
import { TextField, ThemeProvider, createTheme } from "@mui/material"
import { styled } from "styled-components"
import { useContext, useState } from "react"
import Input from "../../components/Form/Input.jsx"
import ButtonFrom from "../../components/Form/Button.jsx"
import api from "../../services/api.jsx"
import UserData from "../../context/UserContext.jsx"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import UserContext from "../../context/UserContext.jsx"


export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const {setUserData} = useContext(UserContext)

    const navigate = useNavigate()

    async function submit(event){
        event.preventDefault();

        const body = {
            email,
            "password" : senha
        }

        try {
            const userData = await api.login(body)
            setUserData(userData.data)
            toast("Login realizado com sucesso!")
            navigate("/estudante")
        } catch (error) {
            toast('Não foi possível fazer o login!');
        }
    }

    return (<Styled.Main>
        <img src={Logo} />

        <form onSubmit={submit}>
            <Styled.Inputs>
                <Input label="Email" type="text" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                <Input label="Senha" type="password" variant="outlined" value={senha} onChange={e => setSenha(e.target.value)} />
                <ButtonFrom type="submit"> Entrar </ButtonFrom>
            </Styled.Inputs>
        </form>
        <Link to="/cadastro"> <p> {"Primeira vez? Cadastre-se"} </p> </Link>

    </Styled.Main>
    )
}

const StyledTextField = styled(TextField)`
  margin-top: 14px !important;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid #000;
`;
