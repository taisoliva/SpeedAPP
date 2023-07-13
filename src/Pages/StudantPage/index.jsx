import { Link } from "react-router-dom"
import * as Styled from "./styled"
import { IoIosArrowDropdown } from "react-icons/io"
import { FaBars, FaWhatsapp } from "react-icons/fa"
import { CircularProgressbar } from "react-circular-progressbar"


export function Studant() {

    return (
        <Styled.Main>
            <Styled.Menu >

                <Styled.Container>
                    {/* <FaBars style={{ fontSize: "40px" }} /> */}
                    <p>{"SPEED"}</p>
                    <CircularProgressbar
                        value={50}
                        text={"50%"}
                        styles={{
                            path: { stroke: "#FFFFFF" },
                            trail: { stroke: "#279038" },
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
            <Styled.ItemClass>
                <p>{"Arrependimento"} </p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <Styled.ItemClass>
                <p>{"Fé"}  </p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <Styled.ItemClass>
                <p>{"Salvação"}  </p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <Styled.ItemClass>
                <p>{"Imersão"} </p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <Styled.Contacts>
                <Link>
                    <p>{"Próximas Aulas"}</p>
                </Link>

                <div> <FaWhatsapp style={{ fontSize: "30px", color: "#25D366 " }} />  <p>{"Fale conosco"}</p></div>
            </Styled.Contacts>

        </Styled.Main>
    )
}