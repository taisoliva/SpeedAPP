import { Link } from "react-router-dom"
import * as Styled from "./styled"
import { IoIosArrowDropdown } from "react-icons/io"
import { FaBars, FaWhatsapp } from "react-icons/fa"
import { CircularProgressbar } from "react-circular-progressbar"
import { useState } from "react"


export function Studant() {

    const [showData, setShowData] = useState(false)
    const [closeContainer, setCloseContainer] = useState(false)

    function dataClass() {
        setShowData(!showData)
       
        setTimeout(()=>{
            setCloseContainer(!closeContainer)
        }, 500)


    }


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

            <Styled.ItemClass>
                <p>{"Arrependimento"} </p>
                <Styled.Icone onClick={dataClass}>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <Styled.ContainerData closeContainer={closeContainer}>
                <Styled.Data showData={showData}>
                    <ul>
                        <li>Aula concluída em: 12/07/2022</li>
                        <li>Professor(a): Taís </li>
                    </ul>
                </Styled.Data>
            </Styled.ContainerData>


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