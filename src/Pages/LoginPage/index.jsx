import * as Styled from "./style.jsx"
import Logo from "../../assets/Logo.jpeg"
import { Link } from "react-router-dom"
import { Button, TextField, ThemeProvider, createTheme } from "@mui/material"
import { styled } from "styled-components"
import { useState } from "react"
import Input from "../../components/Form/Input.jsx"

const theme = createTheme({
    palette: {
        ochre: {
            main: '#000000',
            light: '#000000',
            dark: '#0254b3',
            contrastText: '#f8f8f6',
        },
    },
})
export default function Login() {

    const [email, setEmail] = useState('')

    console.log(email)




    return <Styled.Main>
        <img src={Logo} />

        <Styled.Inputs>
            <Input label="Email" type="text" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
            <StyledTextField label="Senha" variant="outlined" />
            <ThemeProvider theme={theme}>
                <StyledButton color={"ochre"} variant="contained">Entrar</StyledButton>
            </ThemeProvider>
        </Styled.Inputs>

        <Link to="/cadastro"> <p> {"Primeira vez? Cadastre-se"} </p> </Link>
        <Link to="/estudante"> <p> {"Tela Estudante"}</p> </Link>

    </Styled.Main>
}

const StyledTextField = styled(TextField)`
  margin-top: 14px !important;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid #000;
`;

const StyledButton = styled(Button)`
  margin-top: 14px !important;
`