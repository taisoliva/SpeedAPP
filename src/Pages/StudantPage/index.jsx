import { Link } from "react-router-dom"
import * as Styled from "./styled"
import {  FaWhatsapp } from "react-icons/fa"
import { CircularProgressbar } from "react-circular-progressbar"
import classes from "../../config/arrayClass"
import Class from "../../components/Classes"


export function Studant() {
    return (
        <Styled.Main>
            <Styled.Menu >
                <Styled.Container>
                    {/* <FaBars style={{ fontSize: "40px" }} /> */}
                    <p>{"SPEED"}</p>
                    <CircularProgressbar
                        value={100}
                        text={"100%"}
                        styles={{
                            path: { stroke: "#279038" },
                            trail: { stroke: "#cae6cf" },
                            text: {
                                fill: "#000000",
                                textAnchor: "middle",
                                alignmentBaseline: "middle",
                                fontSize: "24px",
                                fontWeight: "bold"
                            },
                            root: { width: "70px" }
                        }} />
                </Styled.Container>
            </Styled.Menu >

            <Styled.User>
                <h1>{"Bem-vindo(a), João!"}</h1>
            </Styled.User>

           {classes.map((item,index) => <Class key={index} className={item}/>)}

            <Styled.Contacts>
                <Link>
                    <p>{"Próximas Aulas"}</p>
                </Link>

                <div> <FaWhatsapp style={{ fontSize: "30px", color: "#25D366 " }} />  <p>{"Fale conosco"}</p></div>
            </Styled.Contacts>

        </Styled.Main>
    )
}
