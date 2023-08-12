import { ThemeProvider, Button, createTheme } from "@mui/material";
import { styled } from "styled-components";

export default function ButtonForm({variant="contained", children, ...props}) {
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
    return (
        <ThemeProvider theme={theme}>
            <StyledButton color={"ochre"} variant={variant} {...props}>{children}</StyledButton>
        </ThemeProvider>
    );
}


const StyledButton = styled(Button)`
  margin-top: 14px !important;
`